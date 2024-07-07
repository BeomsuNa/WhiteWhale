import { useEffect } from 'react';
import { useFetchData } from '@/hooks/UseFetchData';
import MainPageLayOut from './MainPageLayOut';
import MainProductCard from '@/components/ui/MainProductCard';

const BackGroundPage: React.FC = () => {
  const { data, error } = useFetchData('Product');

  useEffect(() => {
    if (error) {
      console.log('에러 발생:', error);
    } else {
      console.log('데이터 받아오기 성공!', data);
    }
  }, [error, data]);

  return (
    <div className="w-full" id="mainPageSection">
      <MainPageLayOut />
    </div>
  );
};

export default BackGroundPage;
