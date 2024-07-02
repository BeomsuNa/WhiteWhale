import { useFetchData } from '@/components/hooks/FetchData';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import { Product } from '@/lib/utils';
import ProductCard from '@/components/ui/ProductCard';
import { useNavigate } from 'react-router-dom';

const OrderStatusPage = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const { data, error } = useFetchData('Product');
  console.log(inView, '스크롤 확인 ');
  if (error) return <div>Error: 에러 발생</div>;
  const goTOUplaodPage = () => {
    navigate('/UploadProductPage');
  };

  return (
    <div className="w-11/12 h-full ">
      <div id="orderTitle">
        <div className="font-bold mt-10 text-white flex flex-row justify-between">
          <p className="ml-5">주문현황</p>
          <Button className="mr-5 mb-3" onClick={goTOUplaodPage}>
            물건 등록
          </Button>
        </div>
      </div>

      <div className="w-70% h-4/6  bg-gray-100">
        {data &&
          data.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        <div ref={ref}>하단</div>
      </div>
    </div>
  );
};

export default OrderStatusPage;
