import { useEffect } from 'react';
import { useFetchData } from '@/components/FetchData';
import Header from '@/components/Header';

const MainPage: React.FC = () => {
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
      <Header />
    </div>
  );
};

export default MainPage;
