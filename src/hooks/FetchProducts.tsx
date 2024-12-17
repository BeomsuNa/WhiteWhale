import {
  getDocs,
  collection,
  query,
  limit,
  startAfter,
  QueryDocumentSnapshot,
  orderBy,
} from 'firebase/firestore';
import { db } from '@/config/firebase';
import { Product, FetchProductsResult } from '@/lib/utils';

const PAGE_SIZE = 10;

const FetchProducts = async ({
  pageParam = null,
}): Promise<FetchProductsResult> => {
  const productsQuery = query(
    collection(db, 'Product'),
    orderBy('createdAt'),
    ...(pageParam ? [startAfter(pageParam)] : []),
    limit(PAGE_SIZE),
  );
  const querySnapshot = await getDocs(productsQuery);
  const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  const productPromises = querySnapshot.docs.map(
    async (doc: QueryDocumentSnapshot) => {
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
        imageUrl: docData.imageUrl,
      };
      return product;
    },
  );
  const products = await Promise.all(productPromises);
  return {
    products,
    nextPage: lastVisible || null,
  };
};

export { FetchProducts };
