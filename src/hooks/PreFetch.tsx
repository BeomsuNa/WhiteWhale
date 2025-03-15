import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { FetchProducts } from '../Dummys/FetchProducts';
import { Alert } from '@/components/ui/alert';

export const usePreFetchProduct = () => {
  const queryClient = useQueryClient();

  const preFetchData = async () => {
    try {
      await queryClient.prefetchQuery({
        queryKey: ['products'], // ✅ v5에서는 객체 형태로 queryKey 전달
        queryFn: FetchProducts, // ✅ 데이터 가져오는 함수 추가 필요
      });
    } catch (error) {
      throw new Error('에러 발생');
    }
  };
  return { preFetchData };
};
