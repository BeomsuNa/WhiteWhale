import { collection, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { Product } from '@/lib/utils';
import { useQuery } from 'react-query';

const fetchProducts = async (): Promise<Product[]> => {
  const querySnapshot = await getDocs(collection(db, 'Product'));
  const products: Product[] = [];
  querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
    const docData = doc.data();
    const product: Product = {
      id: doc.id,
      createdAt: docData.createdAt,
      productCategory: docData.productCategory,
      productDescription: docData.productDescription,
      productName: docData.productName,
      productPrice: docData.productPrice,
      productQuantity: docData.productQuantity,
      sellerId: docData.sellerId,
      updatedAt: docData.updatedAt,
    };
    products.push(product);
  });
  return products;
};

export const useFetchData = (collectionName: string) => {
  return useQuery('products', fetchProducts);
};
