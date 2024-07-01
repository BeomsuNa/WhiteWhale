import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginInfoGuest: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div id="LoginInfoSection" className="flex space-x-4">
      <button
        type="button"
        className="lg:hover:underline"
        onClick={() => navigate('/Login')}
      >
        로그인
      </button>
      <button
        type="button"
        className="lg:hover:underline"
        onClick={() => navigate('/SignUp')}
      >
        회원가입
      </button>
    </div>
  );
};

export default LoginInfoGuest;
