import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import LoginInfoGuest from '../sections/Login/LoginInfoGuest';
import LoginInfoSeller from '../sections/Login/LoginInfoSeller';
import LoginInfoUser from '../sections/Login/LoginInfoUser';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogOutButton = () => {
    logout();
    navigate('/');
  };

  const handleMainPage = () => {
    navigate('/');
  };

  const getloginInfoSection = () => {
    if (!user) {
      return <LoginInfoGuest />;
    }
    if (user.isSeller) {
      return (
        <LoginInfoSeller
          nickname={user.nickname}
          handleLogOutButton={handleLogOutButton}
        />
      );
    }
    return (
      <LoginInfoUser
        nickname={user.nickname}
        handleLogOutButton={handleLogOutButton}
      />
    );
  };

  return (
    <div className="w-full flex justify-between p-4 bg-rgb(55, 58, 64) text-white">
      <Avatar>
        <AvatarImage
          src="logo/Elegant.png"
          className="w-10 h-10"
          onClick={handleMainPage}
        />
        <AvatarFallback>불러오는 중...</AvatarFallback>
      </Avatar>
      {getloginInfoSection()}
    </div>
  );
};

export default Header;
