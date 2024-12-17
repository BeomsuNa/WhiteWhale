import { Alert } from '@/components/ui/alert';
import { db } from '@/config/firebase';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import React from 'react';
import Resizer from 'react-image-file-resizer';

const OptimizeAndReuploadImages = async () => {
  const storage = getStorage();
  const imagesCollectionRef = collection(db, 'Product');
  const querySnapshot = await getDocs(imagesCollectionRef);

  const resizePromises = querySnapshot.docs.map(async docSnapshot => {
    const imageData = docSnapshot.data();
    const { imageUrl } = imageData; // imageUrl 추출

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const resizedImage: Blob = await new Promise<Blob>((resolve, reject) => {
        Resizer.imageFileResizer(
          blob,
          1900,
          1200,
          'WEBP',
          60,
          0,
          (uri: string | Blob | File | ProgressEvent<FileReader>) => {
            if (uri instanceof Blob) {
              resolve(uri);
            } else if (typeof uri === 'string') {
              reject(new Error('Unexpected string type. Expected Blob.'));
            } else {
              reject(new Error('Unexpected type. Expected Blob.'));
            }
          },
          'blob',
        );
      });

      const imageRef = ref(storage, `Product/${docSnapshot.id}.webp`);
      await uploadBytes(imageRef, resizedImage);

      const optimizedUrl = await getDownloadURL(imageRef);

      await updateDoc(doc(db, 'Product', docSnapshot.id), {
        imageUrl: optimizedUrl,
      });
    } catch (error) {
      throw new Error('오류 발생');
    }
  });

  await Promise.all(resizePromises);
};

export default OptimizeAndReuploadImages;
