import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import LoginInfoGuest from './LoginInfoGuest';
import LoginInfoSeller from './LoginInfoSeller';
import LoginInfoUser from './LoginInfoUser';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogOutButton = () => {
    logout();
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
    <div className="w-full flex justify-between p-4 bg-gray-100">
      <p className="text-lg font-bold">WhiteWhale</p>
      {getloginInfoSection()}
    </div>
  );
};

export default Header;
