import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@radix-ui/react-hover-card';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleMyPagleButton = () => {
    navigate('/');
  };

  return (
    <div className="w-full  justify-between p-4 bg-gray-100">
      <div className="flex justify-between" id="HeaderSection">
        <p className="text-lg font-bold">WhiteWhale</p>
        <div id="LoginInfoSection" className="flex space-x-4">
          <p>이름</p>
          <HoverCard>
            <HoverCardTrigger asChild>
              <button type="button" className="lg:hover:underline">
                내정보
              </button>
            </HoverCardTrigger>
            <HoverCardContent>내정보를 확인합니다.</HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <button type="button" className="lg:hover:underline">
                주문현황
              </button>
            </HoverCardTrigger>
            <HoverCardContent>
              현재 주문하신 물건의 주문 상태를 확인할 수 있습니다.
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <button type="button" className="lg:hover:underline">
                로그아웃
              </button>
            </HoverCardTrigger>
          </HoverCard>
        </div>
      </div>
    </div>
  );
};

export default Header;
