import { useQuery, useInfiniteQuery } from 'react-query';
import { FetchProducts } from './FetchProducts';
import { FetchProductsResult, Product } from '@/lib/utils';
import { FetchProductCardData } from './FetchProductCardData';

export const useFetchData = (collectionName: string) => {
  return useQuery('products', FetchProducts);
};

export const useFetchInfiniteProducts = () => {
  return useInfiniteQuery<FetchProductsResult>('products', FetchProducts, {
    getNextPageParam: lastPage => lastPage.nextPage || undefined,
  });
};

export const useFetchProductCardData = () => {
   return useQuery('productCardData', FetchProductCardData); // 함수 이름이 일치하는지 확인
};
