import { db } from '@/config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';

const FetchUser = async (firebaseUser: User) => {
  const userDoc = await getDoc(doc(db, 'User', firebaseUser.uid));
  if (userDoc.exists()) {
    return {
      uid: firebaseUser.uid,
      email: userDoc.data().email,
      isSeller: userDoc.data().isSeller,
      nickname: userDoc.data().nickname,
    };
  }
  throw new Error('유저를 찾을 수 없습니다.');
};

export default FetchUser;
