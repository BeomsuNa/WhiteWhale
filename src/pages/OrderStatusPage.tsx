import { useFetchData, useFetchInfiniteProducts } from '@/hooks/UseFetchData';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import { Product } from '@/lib/utils';
import ProductCard from '@/components/ui/ProductCardLayOut';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const OrderStatusPage = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useFetchInfiniteProducts();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  console.log(inView, '스크롤 확인 ');
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: 에러발생</div>;
  const goTOUplaodPage = () => {
    navigate('/UploadProductPage');
  };

  return (
    <div className="w-11/12 h-full">
      <div id="orderTitle">
        <div className="font-bold mt-10 text-white flex flex-row justify-between">
          <p className="ml-5">주문현황</p>
          <Button className="mr-5 mb-3" onClick={goTOUplaodPage}>
            물건 등록
          </Button>
        </div>
      </div>

      <div className="w-70% h-4/6 bg-gray-100">
        {data?.pages?.map((page, pageIndex) => (
          <div key={pageIndex}>
            {page.products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ))}

        <div ref={ref} style={{ height: 1, backgroundColor: 'transparent' }} />
        {isFetchingNextPage && <div>Loading more...</div>}
      </div>
    </div>
  );
};

export default OrderStatusPage;
