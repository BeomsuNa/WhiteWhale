import { useQuery, useInfiniteQuery } from 'react-query';
import { FetchProducts } from './FetchProducts';
import { FetchProductsResult, ProductCard } from '@/lib/utils';
import { fetchProductCardData } from './FetchProductCardData';

export const useFetchInfiniteProducts = () => {
  return useInfiniteQuery<FetchProductsResult>('products', FetchProducts, {
    getNextPageParam: lastPage => lastPage.nextPage || undefined,
  });
};

export const useFetchProductCardData = (sortOption: string) => {
  return useQuery<ProductCard[]>(['productCardData', sortOption], () =>
    fetchProductCardData(sortOption),
  );
};
