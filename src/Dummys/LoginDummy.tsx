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
        const UserInfo = UserCredential.user;
        onLoginSuccess();
      } catch {
        alert('에러 발생 로그인 실패');
      }
    };
    Signin();
  }, [email, passWord, onLoginSuccess]);

  return <header>Login</header>;
};

export default Login;
