import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from 'firebase/storage';
import React, { useState } from 'react';
import Resizer from 'react-image-file-resizer';

interface UseImageUploadReturn {
  uploadImage: (imageFile: File, folderPath: string) => Promise<string>;
  isUploading: boolean;
  error: string | null;
}

const UseImageUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const storage = getStorage();

  const uploadImage = async (
    imageFile: File,
    folderPath: string,
  ): Promise<string> => {
    setIsUploading(true);

    try {
      const resizedImage: Blob = await new Promise<Blob>((resolve, rejects) => {
        Resizer.imageFileResizer(
          imageFile,
          1900,
          1200,
          'WEBP',
          60,
          0,

          (uri: string | Blob | File | ProgressEvent<FileReader>) => {
            if (uri instanceof Blob) {
              resolve(uri);
            } else {
              rejects(new Error('이미지 변환에 실패했습니다.'));
            }
          },
          'blob',
        );
      });

      const orginalFileRef = ref(storage, `${folderPath}/${imageFile.name}`);
      await uploadBytes(orginalFileRef, imageFile);

      const optimiseFileName = `${folderPath}/${imageFile.name.split('.')[0]}.webp`;
      const optimizedFileRef = ref(storage, optimiseFileName);
      await uploadBytes(optimizedFileRef, resizedImage);

      const optimizedUrl = await getDownloadURL(optimizedFileRef);

      await deleteObject(orginalFileRef);
      setIsUploading(false);

      return optimizedUrl;
    } catch (err) {
      setError('이미지 오류');
      setIsUploading(false);
      throw err;
    }
  };
  return {
    uploadImage,
    isUploading,
    error,
  };
};

export default UseImageUpload;
