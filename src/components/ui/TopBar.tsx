import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { useAuth } from '../context/AuthContext';
import LoginInfoGuest from '@/sections/Login/LoginInfoGuest';
import LoginInfoSeller from '@/sections/Login/LoginInfoSeller';
import LoginInfoUser from '@/sections/Login/LoginInfoUser';

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
          src="../logo/Elegant.webp"
          className="w-24 h-24"
          onClick={handleMainPage}
          alt="logo"
        />
        <AvatarFallback>불러오는 중...</AvatarFallback>
      </Avatar>
      {getloginInfoSection()}
    </div>
  );
};

export default Header;
