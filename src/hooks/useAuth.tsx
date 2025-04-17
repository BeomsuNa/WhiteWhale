import UserAuthStore from '@/components/store/UserAuthStore';
import { User } from '@/lib/utils';

export const useLogin = () => {
  const login = UserAuthStore(state => state.login);
  const API = import.meta.env.VITE_API_URL;
  const loginUser = async (email: string, passWord: string) => {
    const res = await fetch(`${API}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, passWord }),
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
