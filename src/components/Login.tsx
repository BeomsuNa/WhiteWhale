import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect } from 'react';

interface LoginProps {
  email: string;
  passWord: string;
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ email, passWord, onLoginSuccess }) => {
  useEffect(() => {
    const auth = getAuth();
    const Signin = async () => {
      try {
        const UserCredential = await signInWithEmailAndPassword(
          auth,
          email,
          passWord,
        );
        console.log('로그인 성공');
        const UserInfo = UserCredential.user;
        console.log('현재 유저 정보는?', UserInfo);
        onLoginSuccess();
      } catch {
        console.error('에러 발생 로그인 실패');
      }
    };
    Signin();
  }, [email, passWord, onLoginSuccess]);

  return <div>Login</div>;
};

export default Login;
