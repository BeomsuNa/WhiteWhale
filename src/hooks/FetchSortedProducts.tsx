import { useQuery } from 'react-query';
import {
  collection,
  getDocs,
  orderBy,
  query,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { db } from '@/config/firebase';
import { ProductCard } from '@/lib/utils';

const fetchSortedProducts = async (
  sortField: string,
): Promise<ProductCard[]> => {
  const productsCollection = collection(db, 'Product');
  const productsQuery = query(productsCollection, orderBy(sortField));
  const querySnapshot = await getDocs(productsQuery);
  const products: ProductCard[] = querySnapshot.docs.map(
    (doc: QueryDocumentSnapshot) => {
      const docData = doc.data();
      return {
        id: doc.id,
        updatedAt: docData.createdAt,
        productName: docData.productName,
        productPrice: docData.productPrice,
        imageUrl: docData.imageUrl,
        productCategory: docData.productCategory,
        productQuantity: docData.productQuantity,
      };
    },
  );
  return products;
};

export const useFetchSortedProducts = (sortField: string) => {
  return useQuery(['sortedProducts', sortField], () =>
    fetchSortedProducts(sortField),
  );
};
