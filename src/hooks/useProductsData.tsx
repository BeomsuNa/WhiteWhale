import { useQuery } from '@tanstack/react-query';
import { Product } from '@/lib/utils';

const fetchProducts = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);
  const data = await res.json();
  return data;
};

const useProductsData = () => {
  const query = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  return query;
};

export default useProductsData;
