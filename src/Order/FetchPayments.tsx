import { db } from '@/config/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React from 'react';
import { useQuery } from 'react-query';

const FetchPayments = async (userId: string) => {
  const q = query(collection(db, 'payments'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  const payments = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  return payments;
};

export const usePayments = (userId: string) => {
  return useQuery(['paymetnrs', userId], () => FetchPayments(userId));
};
