import { db } from '@/config/firebase';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useQuery, UseQueryResult } from 'react-query';

interface Payment {
  productImg: string;
  id: string;
  productName: string;
  payState: string;
  totalAmount: number;
  userId: string;
  // 필요한 다른 필드들 추가
}

const FetchPayments = async (userId: string): Promise<Payment[]> => {
  const q = query(collection(db, 'purchases'), where('uid', '==', userId));
  const querySnapshot = await getDocs(q);
  const payments = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Payment[];
  return payments;
};
const fetchUserPayments = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    const payments = await FetchPayments(user.uid); // uid 값을 전달
    console.log('사용자의 결제 내역:', payments);
  } else {
    console.error('사용자가 로그인되어 있지 않습니다.');
  }
};

export const usePayments = (
  userId: string,
): UseQueryResult<Payment[], unknown> => {
  return useQuery(['paymetnrs', userId], () => FetchPayments(userId));
};
