import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/components/context/AuthContext';

interface LoginFormProps {
  onLogin: (email: string, passWord: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = () => {
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
      // 로그인 실패 시 처리할 로직 추가
      alert('로그인이 실패하였습니다. 다시 확인해주세요!');
    }
  };
  return (
    <article className="flex justify-center m-12 h-ull">
      <form
        onSubmit={handleLogin}
        className="w-1/3 h-128 pl-8 pr-8 pt-8 shadow-md bg-gray-300"
      >
        <header className="mb-10 text-lg font-bold"> Login</header>
        <fieldset className="mb-4">
          <legend className="sr-only">Login Credentials</legend>
          <section className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="border border-black bg-slate-200"
            />
          </section>
          <section className="mb-4">
            <Label htmlFor="passWord">PASSWORD</Label>
            <Input
              type="password"
              id="passWord"
              value={passWord}
              onChange={e => setPassWord(e.target.value)}
              className="border border-black bg-slate-200"
            />
          </section>
        </fieldset>

        <Button type="submit" className="m-6">
          로그인
        </Button>
        <footer>
          <p>
            아직 아이디가 없으신가요? <a href="/SignUp">회원가입 클릭</a>
          </p>
        </footer>
      </form>
    </article>
  );
};

export default LoginForm;
