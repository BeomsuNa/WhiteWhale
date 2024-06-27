import React from 'react';
import { Button } from './ui/button';
import { useAuth } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const LogOut = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogOutButton = () => {
    logout();
    navigate('/');
  };
  return (
    <div>
      <Button onClick={handleLogOutButton}>로그아웃</Button>
    </div>
  );
};
