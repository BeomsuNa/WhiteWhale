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

const LoginInfoUser: React.FC<Props> = ({ nickname, handleLogOutButton }) => {
  const navigate = useNavigate();

  return (
    <nav id="LoginInfoSection" className="flex space-x-4">
      <p>{nickname}님</p>
      <HoverCard>
        <HoverCardTrigger asChild>
          <button
            type="button"
            className="lg:hover:underline"
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
            onClick={() => navigate('/DeliveryStatusPage')}
          >
            주문현황
          </button>
        </HoverCardTrigger>
        <HoverCardContent>
          현재 주문하신 물건의 주문 상태를 확인할 수 있습니다.
        </HoverCardContent>
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

export default LoginInfoUser;
