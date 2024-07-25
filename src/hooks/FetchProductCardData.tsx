import {
  getDocs,
  collection,
  QueryDocumentSnapshot,
  orderBy,
  query,
  FirestoreDataConverter,
  SnapshotOptions,
  DocumentData,
} from 'firebase/firestore';
import { db } from '@/config/firebase';
import { ProductCard } from '@/lib/utils';

const productCardConverter: FirestoreDataConverter<ProductCard> = {
  toFirestore(productCard: ProductCard): DocumentData {
    return { ...productCard };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): ProductCard {
    const data = snapshot.data(options)!;
    return {
      id: snapshot.id,
      updatedAt: data.createdAt,
      productName: data.productName,
      productPrice: data.productPrice,
      imageUrl: data.imageUrl,
      productCategory: data.productCategory,
      productQuantity: data.productQuantity,
    };
  },
};

export const fetchProductCardData = async (
  sortOption: string,
): Promise<ProductCard[]> => {
  let IndexOption;
  if (sortOption === 'date') {
    IndexOption = query(collection(db, 'Product'), orderBy('updateAt', 'desc'));
  } else if (sortOption === 'price') {
    IndexOption = query(
      collection(db, 'Product'),
      orderBy('productPrice', 'desc'),
    );
  } else {
    IndexOption = collection(db, 'Product');
  }

  const querySnapshot = await getDocs(IndexOption);
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
        productQuantity: docData.productQuantity,
      };
    },
  );
  return products;
};
