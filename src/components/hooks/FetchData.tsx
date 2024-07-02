import { useQuery } from 'react-query';
import { fetchProducts } from '@/components/hooks/FetchProducts';

export const useFetchData = (collectionName: string) => {
  return useQuery('products', fetchProducts);
};
