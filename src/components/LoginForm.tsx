import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/components/context/AuthContext';

interface LoginFormProps {
  onLogin: (email: string, passWord: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>('');
  const [passWord, setPassWord] = useState<string>('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(email, passWord);
      navigate('/'); // 로그인 성공 시 홈으로 이동
    } catch (error) {
      console.error('로그인 실패', error);
      // 로그인 실패 시 처리할 로직 추가
      alert('로그인이 실패하였습니다. 다시 확인해주세요!');
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Label htmlFor="passWord">PASSWORD</Label>
      <Input
        type="password"
        id="passWord"
        value={passWord}
        onChange={e => setPassWord(e.target.value)}
      />
      <Button type="submit">로그인</Button>
    </form>
  );
};

export default LoginForm;
