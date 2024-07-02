import { getDocs, collection, QueryDocumentSnapshot } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { db, storage } from '@/config/firebase';
import { Product } from '@/lib/utils';

const fetchProducts = async (): Promise<Product[]> => {
  const querySnapshot = await getDocs(collection(db, 'Product'));
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
  return products;
};

export { fetchProducts };
