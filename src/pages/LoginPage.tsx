import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from '@/components/Login';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [passWord, setPassWord] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const navigate = useNavigate();
  const goToMainPage = () => {
    navigate('/');
  };
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
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
        <div>
          <p>
            아직 아이디가 없으신가요? <Link to="/SignUp">회원가입 클릭</Link>
          </p>
        </div>
      </form>
      Login 로그인 페이지입니다.
      <button type="button" onClick={goToMainPage}>
        메인으로 돌아가기
      </button>
      {submitted && <Login email={email} passWord={passWord} />}
    </div>
  );
}

export default LoginPage;
