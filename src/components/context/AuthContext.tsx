import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User as FirebaseUser,
} from 'firebase/auth';
import { useQuery, useQueryClient } from 'react-query';
import fetchUser from '@/hooks/FetchUser';

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  // 추가 필드가 필요한 경우 여기에 정의합니다.
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  firebaseUser: FirebaseUser | null;
}

// 초기 값 설정
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider 컴포넌트
export function AuthProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();
  const auth = getAuth();
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setFirebaseUser(user);
        queryClient.setQueryData('user', user);
      } else {
        setFirebaseUser(null);
        queryClient.setQueryData('user', null);
      }
    });
    return () => unsubscribe();
  }, [auth, queryClient]);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
    queryClient.invalidateQueries('user');
  };

  const logout = async () => {
    await auth.signOut();
    queryClient.invalidateQueries('user');
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        firebaseUser,
        isLoggedIn: !!firebaseUser,
        user: null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// AuthContext를 사용하는 훅
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const { login, logout, firebaseUser } = context;

  const {
    data: user,
    isLoading: userLoading,
    error,
  } = useQuery(
    ['userData', firebaseUser?.uid],
    () => fetchUser(firebaseUser as FirebaseUser), // firebaseUser 객체를 인수로 전달
    { enabled: !!firebaseUser },
  );

  return {
    isLoggedIn: !!firebaseUser,
    user,
    firebaseUser,
    login,
    logout,
    isLoading: userLoading,
    error,
  };
};
