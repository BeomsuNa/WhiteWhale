import { useFetchInfiniteProducts } from '@/hooks/UseFetchData';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import ProductCard from '@/components/ui/ProductCardLayOut';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const RegistrationProductPage = () => {
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
    navigate('/registrationproudctpage');
  };

  return (
    <div className="w-4/5 mx-auto">
      <header id="orderTitle">
        <div className="font-bold p-20 text-white flex flex-row justify-between">
          <p className="text-lg">주문현황</p>
          <Button className="mr-5 " onClick={goTOUplaodPage}>
            물건 등록
          </Button>
        </div>
      </header>

      <main className="w-70% p-20 ">
        {data?.pages?.map(page => (
          <div key={page.products[0]?.id}>
            {page.products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ))}

        <div ref={ref} style={{ height: 1, backgroundColor: 'transparent' }} />
        {isFetchingNextPage && <div>Loading more...</div>}
      </main>
    </div>
  );
};

export default RegistrationProductPage;
