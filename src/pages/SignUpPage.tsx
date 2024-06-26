import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { User } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '@/firebase';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface User {
  email: string;
  id: string;
  isSeller: boolean;
  nickname: string;
  password: string;
}

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const [checkpassWord, setCheckPassWord] = useState('');
  const [nickName, setNickName] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const goToMainPage = () => {
    navigate('/');
  };
  const onRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !passWord) {
      console.log('이메일과 비밀번호를 입력하세요');
      return;
    }
    if (passWord.length < 8) {
      console.error('비밀번호는 8자 이상으로 작성해야합니다.');
      return;
    }
    if (passWord !== checkpassWord) {
      console.error('비밀번호가 일치하지 않습니다. 다시 시도하세요');
      return;
    }
    try {
      const signUpRegister = await createUserWithEmailAndPassword(
        auth,
        email,
        passWord,
      );
      console.log('회원가입의 데이터는?', signUpRegister);
      const userId = signUpRegister.user.uid;
      const userDocRef = doc(db, 'User', userId);
      const userData: User = {
        email,
        id: userId,
        isSeller: false,
        nickname: nickName,
        password: passWord,
      };
      await setDoc(userDocRef, userData);
      console.log('회원가입에 성공했습니다.');
      goToMainPage();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      SignUp 회원가입 페이지입니다.
      <form onSubmit={onRegister}>
        <p>이메일</p>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Label htmlFor="passWord">비밀번호</Label>
        <Input
          type="password"
          id="passWord"
          value={passWord}
          onChange={e => setPassWord(e.target.value)}
        />
        <Label htmlFor="checkPassWord">비밀번호확인</Label>
        <Input
          type="password"
          id="checkPassWord"
          value={checkpassWord}
          onChange={e => setCheckPassWord(e.target.value)}
        />
        <Label htmlFor="nickName">닉네임</Label>
        <Input
          id="nickName"
          value={nickName}
          onChange={e => setNickName(e.target.value)}
        />

        <div>
          <Button type="submit">회원가입</Button>
          <Button onClick={goToMainPage}>돌아가기</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
