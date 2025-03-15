import { useQuery } from '@tanstack/react-query';
import { Product } from '@/lib/utils';

const fetchProducts = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);
  const data = await res.json();
  console.log('🔥 서버에서 받은 데이터:', data);
  return data;
};

const useProductsData = () => {
  const query = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  console.log('🔥 서버에서 받은 데이터:', query.data); // ✅ query.data를 출력하여 확인

  return query;
};

export default useProductsData;
