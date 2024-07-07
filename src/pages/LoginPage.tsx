import React, { useState } from 'react';
import LoginForm from '@/sections/Login/LoginForm';
import Login from '@/sections/Login/Login';
import { useAuth } from '@/components/context/AuthContext';

const LoginPage: React.FC = () => {
  const [credentials, setCredentials] = useState<{
    email: string;
    passWord: string;
  } | null>(null);
  const { login } = useAuth();

  const handleLogin = (email: string, passWord: string) => {
    setCredentials({ email, passWord });
  };

  const handleLoginSuccess = () => {
    login(); // 로그인 상태 업데이트
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <LoginForm onLogin={handleLogin} />
      {credentials && (
        <Login
          email={credentials.email}
          passWord={credentials.passWord}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      <div>
        <p>
          아직 아이디가 없으신가요? <a href="/SignUp">회원가입 클릭</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
