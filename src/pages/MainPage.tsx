import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useFetchData } from '@/components/ReadFireStoreData';

const MainPage: React.FC = () => {
  const { data, loading, error } = useFetchData('products');
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/Login');
  };

  useEffect(() => {
    if (loading) {
      console.log('로딩 중...');
    } else if (error) {
      console.log('에러 발생:', error);
    } else {
      console.log('데이터 받아오기 성공!', data);
    }
  }, [loading, error, data]);

  return (
    <div>
      메인페이지입니다.
      <button type="button" onClick={goToLogin}>
        로그인
      </button>
    </div>
  );
};

export default MainPage;
