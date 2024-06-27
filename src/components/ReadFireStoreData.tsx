import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
  Timestamp,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '@/config/firebase';

interface Product {
  createdAt: Timestamp;
  id: string;
  productCategory: string;
  productDescription: string;
  productName: number;
  productPrice: number;
  productQuantity: number;
  sellerId: number;
  updatedAt: Timestamp;
}

export const useFetchData = (collectionName: string) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Product'));
        const documents: Product[] = [];
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
          documents.push(product);
        });
        setData(documents);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };
    fetchData();
  }, [collectionName]);

  return { data, loading, error };
};
