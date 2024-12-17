import React from 'react';
import { useQueryClient } from 'react-query';
import { FetchProducts } from './FetchProducts';
import { Alert } from '@/components/ui/alert';

export const usePreFetchProduct = () => {
  const queryClient = useQueryClient();

  const preFetchData = async () => {
    try {
      await queryClient.prefetchQuery('products', FetchProducts);
    } catch (error) {
      throw new Error('에러 발생');
    }
  };
  return { preFetchData };
};
