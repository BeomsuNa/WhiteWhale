import useUserData from './useUserData';

import UserAuthStore from '@/components/store/UserAuthStore';
import { User } from '@/lib/utils';

export const useLogin = () => {
  const { data: users } = useUserData();
  const login = UserAuthStore(state => state.login);
  const loginUser = (email: string, passWord: string) => {
    const Find = users?.find(
      (u: User) => u.email === email && u.password === passWord,
    );

    if (Find) {
      login(Find);
      return true;
    }
    return false;
  };
  return { loginUser };
};
