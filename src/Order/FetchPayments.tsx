import { db } from '@/config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useQuery, UseQueryResult } from 'react-query';

interface Payment {
  id: string;
  productName: string;
  status: string;
  totalAmount: number;
  userId: string;
  // 필요한 다른 필드들 추가
}

const FetchPayments = async (userId: string): Promise<Payment[]> => {
  const q = query(collection(db, 'payments'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  const payments = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Payment[];
  return payments;
};

export const usePayments = (
  userId: string,
): UseQueryResult<Payment[], unknown> => {
  return useQuery(['paymetnrs', userId], () => FetchPayments(userId));
};
