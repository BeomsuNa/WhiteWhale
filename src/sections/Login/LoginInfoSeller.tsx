import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@radix-ui/react-hover-card';

interface Props {
  nickname: string;
  handleLogOutButton: () => void;
}

const LoginInfoSeller: React.FC<Props> = ({ nickname, handleLogOutButton }) => {
  const navigate = useNavigate();

  return (
    <nav id="LoginInfoSection" className="flex space-x-5 space-y-2">
      <div className="my-2">
        <p>{nickname}님 (판매자)</p>
      </div>
      <HoverCard>
        <HoverCardTrigger>
          <button
            type="button"
            className="lg:hover:underline "
            onClick={() => navigate('/MyPage')}
          >
            내정보
          </button>
        </HoverCardTrigger>
        <HoverCardContent>내정보를 확인합니다.</HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger>
          <button
            type="button"
            className="lg:hover:underline"
            onClick={() => navigate('/uploadproductpage')}
          >
            물건등록
          </button>
        </HoverCardTrigger>
        <HoverCardContent>판매하고 싶은 물건을 등록합니다</HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger>
          <button
            type="button"
            className="lg:hover:underline"
            onClick={handleLogOutButton}
          >
            로그아웃
          </button>
        </HoverCardTrigger>
      </HoverCard>
    </nav>
  );
};

export default LoginInfoSeller;
