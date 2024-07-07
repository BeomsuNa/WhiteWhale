import {
  getDocs,
  collection,
  QueryDocumentSnapshot,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/config/firebase';

interface ProductCard {
  createdAt: Timestamp;
  id: string;
  productCategory: string;
  productName: string;
  productPrice: number;
  imageUrl?: string;
}

export const FetchProductCardData = async (): Promise<ProductCard[]> => {
  const querySnapshot = await getDocs(collection(db, 'Product'));
  const products: ProductCard[] = querySnapshot.docs.map(
    (doc: QueryDocumentSnapshot) => {
      const docData = doc.data();
      return {
        id: doc.id,
        createdAt: docData.createdAt,
        productName: docData.productName,
        productPrice: docData.productPrice,
        imageUrl: docData.imageUrl,
        productCategory: docData.productCategory,
      };
    },
  );
  return products;
};
