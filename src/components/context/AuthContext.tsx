import React, {
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
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';

interface User {
  email: string;
  isSeller: boolean;
  nickname: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

// 초기 값 설정
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider 컴포넌트
export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async firebaseUser => {
      if (firebaseUser) {
        const userDoc = await getDoc(doc(db, 'User', firebaseUser.uid));
        if (userDoc.exists()) {
          setUser({
            email: firebaseUser.email!,
            isSeller: userDoc.data().isSeller,
            nickname: userDoc.data().nickname,
          });
          setIsLoggedIn(true);
          console.log('정보가 받아져서 완료되었습니다!');
        }
      } else {
        setUser(null);
        setIsLoggedIn(false);
        console.log('정보를 받을 수 없었습니다!');
      }
    });
    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
    const firebaseUser = auth.currentUser;
    if (firebaseUser) {
      const userDoc = await getDoc(doc(db, 'User', firebaseUser.uid));
      if (userDoc.exists()) {
        setUser({
          email: firebaseUser.email!,
          isSeller: userDoc.data().isSeller,
          nickname: userDoc.data().nickname,
        });
        setIsLoggedIn(true);
      }
    }
  };

  const logout = async () => {
    const auth = getAuth();
    await auth.signOut();
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
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
  return context;
};
