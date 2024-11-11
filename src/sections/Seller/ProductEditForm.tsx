import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  doc,
  getDoc,
  updateDoc,
  Timestamp,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '@/config/firebase';
import { Button } from '@/components/ui/button';
import { useNavigate, useParams } from 'react-router-dom';

interface ProductEditFormProps {
  sortOption?: string;
}

const ProductEditForm: React.FC<ProductEditFormProps> = ({
  sortOption = 'default',
}) => {
  const { productId } = useParams<{ productId: string }>();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');

  const storage = getStorage();
  const navigate = useNavigate();

  useEffect(() => {
    if (!productId) {
      console.log('데이터가 없어 메인으로 돌아왔습니다.');
      navigate('/'); // productId가 없으면 메인 페이지로 리디렉션
      return;
    }

    const fetchProduct = async () => {
      const productDoc = await getDoc(doc(db, 'Product', productId));
      if (productDoc.exists()) {
        const productData = productDoc.data();
        setProductName(productData.productName);
        setProductPrice(productData.productPrice.toString());
        setProductQuantity(productData.productQuantity.toString());
        setProductDescription(productData.productDescription);
        setImageUrl(productData.imageUrl);
      }
    };
    fetchProduct();
  }, [productId, navigate]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUploadImage = async () => {
    if (image) {
      const imageName = `${Date.now()}-${image.name}`;
      const storageRef = ref(storage, `Product/${imageName}`);
      await uploadBytes(storageRef, image);
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
      return url;
    }
    return imageUrl;
  };

  const handleUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = await handleUploadImage();
    const productData = {
      productName,
      productPrice: parseFloat(productPrice),
      productQuantity: parseInt(productQuantity, 10),
      productDescription,
      imageUrl: url,
      updatedAt: Timestamp.now(),
    };

    if (productId) {
      await updateDoc(doc(db, 'Product', productId), productData);
      navigate('/OrderStatusPage');
    } else {
      console.error('에러발생');
    }
  };

  const handleDeleteProduct = async (productIds: string) => {
    await deleteDoc(doc(db, 'Product', productIds));
    navigate('/OrderStatusPage');
  };

  return (
    <form onSubmit={handleUpdateProduct}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <fieldset className="sm:col-span-2">
          <legend className="sr-only">productedit</legend>
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              제품 이름
            </label>
            <input
              type="text"
              id="name"
              value={productName}
              onChange={e => setProductName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type product name"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              제품 가격
            </label>
            <input
              type="number"
              id="price"
              value={productPrice}
              onChange={e => setProductPrice(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
          <div>
            <label
              htmlFor="item-weight"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              제품 수량
            </label>
            <input
              type="number"
              id="item-weight"
              value={productQuantity}
              onChange={e => setProductQuantity(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
          <div>
            <label
              htmlFor="productCategory"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              카테고리
            </label>
            <select
              id="productCategory"
              value={productCategory}
              onChange={e => setProductCategory(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option value="">카테고리 선택</option>
              <option value="keyboard">커스텀키보드</option>
              <option value="key">키보드 조각</option>
              <option value="accessory">악세서리</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              제품 설명
            </label>
            <textarea
              id="description"
              value={productDescription}
              onChange={e => setProductDescription(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your description here"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              제품 이미지
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
            {imageUrl && (
              <img src={imageUrl} alt="Product" className="mt-2 w-1/4" />
            )}
          </div>
        </fieldset>
      </div>

      <Button type="submit" className="py-2 mt-4">
        제품 수정
      </Button>
      <Button
        type="submit"
        className="py-2 mt-4"
        onClick={() => handleDeleteProduct(productId!)}
      >
        제품 삭제
      </Button>
    </form>
  );
};

export default ProductEditForm;
