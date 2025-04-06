import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/radixUi/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/radixUi/label';
import { useLogin } from '@/hooks/useAuth';

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [passWord, setPassWord] = useState<string>('');
  const navigate = useNavigate();
  const { loginUser } = useLogin();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await loginUser(email, passWord);
    if (success) {
      navigate('/');
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
