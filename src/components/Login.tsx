import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';
import { useEffect } from 'react';

interface LoginProps {
  email: string;
  passWord: string;
}

const Login: React.FC<LoginProps> = ({ email, passWord }) => {
  useEffect(() => {
    const auth = getAuth();
    const Signin = async () => {
      try {
        const UserCredential: UserCredential = await signInWithEmailAndPassword(
          auth,
          email,
          passWord,
        );
        console.log('로그인 성공');
        const UserInfo = UserCredential.user;
        console.log('현재 유저 정보는?', UserInfo);
      } catch {
        console.error('에러 발생 로그인 실패');
      }
    };
    Signin();
  }, [email, passWord]);
  return <div>Login</div>;
};

export default Login;
