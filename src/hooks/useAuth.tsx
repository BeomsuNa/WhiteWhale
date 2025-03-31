import UserAuthStore from '@/components/store/UserAuthStore';
import { User } from '@/lib/utils';

export const useLogin = () => {
  const login = UserAuthStore(state => state.login);
  const loginUser = async (email: string, password: string) => {
    const res = await fetch('http://localhost:3006/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      alert(data.message || '로그인 실패');
      return false;
    }
    localStorage.setItem('token', data.token);
    login(data.user);
    return true;
  };
  return { loginUser };
};

export const useLogout = () => {
  const login = UserAuthStore(state => state.logout);
};
