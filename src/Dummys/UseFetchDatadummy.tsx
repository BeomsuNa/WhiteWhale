import { useQuery, useInfiniteQuery } from 'react-query';
import { FetchProducts } from './FetchProducts';
import { FetchProductsResult, ProductCard } from '@/lib/utils';
import { fetchProductCardData } from '../hooks/FetchProductCardData';

export const useFetchProductCardData = (sortOption: string) => {
  return useQuery<ProductCard[]>(['productCardData', sortOption], () =>
    fetchProductCardData(sortOption),
  );
};
