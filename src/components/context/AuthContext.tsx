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
import { useQuery, useQueryClient } from '@tanstack/react-query';
import fetchUser from '@/hooks/FetchUser';

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  firebaseUser: FirebaseUser | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();
  const auth = getAuth();
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setFirebaseUser(user);
        queryClient.setQueryData(['user'], user); // ✅ v5 방식
      } else {
        setFirebaseUser(null);
        queryClient.setQueryData(['user'], user); // ✅ v5 방식
      }
    });
    return () => unsubscribe();
  }, [auth, queryClient]);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
    queryClient.invalidateQueries({ queryKey: ['user'] }); // ✅ v5 방식
  };

  const logout = async () => {
    await auth.signOut();
    queryClient.invalidateQueries({ queryKey: ['user'] }); // ✅ v5 방식
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
  } = useQuery({
    queryKey: ['userData', firebaseUser?.uid], // ✅ v5 방식
    queryFn: () => fetchUser(firebaseUser as FirebaseUser),
    enabled: !!firebaseUser,
  });

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
