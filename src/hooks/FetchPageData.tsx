import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { db } from '@/config/firebase';
import { Product, FetchProductsResult } from '@/lib/utils';

const fetchProducts = async ({
  pageParam = null,
}): Promise<FetchProductsResult> => {
  let queryData = query(
    collection(db, 'Product'),
    orderBy('createdAt', 'desc'),
    limit(10),
  );

  if (pageParam) {
    queryData = query(
      collection(db, 'Product'),
      orderBy('createdAt', 'desc'),
      limit(10),
    );
  }

  const querySnapshot = await getDocs(queryData);
  const products: Product[] = [];
  querySnapshot.forEach((docData: QueryDocumentSnapshot) => {
    products.push({ id: docData.id, ...docData.data() } as Product);
  });

  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

  return { products, nextPage: lastVisible ? lastVisible.id : null };
};

export { fetchProducts };
