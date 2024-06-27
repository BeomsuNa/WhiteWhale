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

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(email, passWord);
    navigate('/');
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
