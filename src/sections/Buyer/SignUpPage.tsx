import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '@/config/firebase';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

interface UserInfo {
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
  const [checked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const goToMainPage = () => {
    navigate('/');
  };
  const handleCheckBox = () => {
    setIsChecked(!checked);
  };
  const onRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !passWord) {
      console.log('이메일과 비밀번호를 입력하세요');
      return;
    }
    if (passWord.length < 8) {
      alert('비밀번호는 8자 이상으로 작성해야합니다.');
      return;
    }
    if (passWord !== checkpassWord) {
      alert('비밀번호가 일치하지 않습니다. 다시 시도하세요');
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
      const userData: UserInfo = {
        email,
        id: userId,
        isSeller: checked,
        nickname: nickName,
        password: passWord,
      };
      await setDoc(userDocRef, userData);
      alert('회원가입에 성공했습니다.');
      goToMainPage();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article>
      SignUp 회원가입 페이지입니다.
      <form onSubmit={onRegister}>
        <fieldset>
          <legend>
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
            <Checkbox checked={checked} onCheckedChange={handleCheckBox} />
            <p>판매자입니까?{checked ? 'check' : 'not check'}</p>
          </legend>
        </fieldset>
        <main>
          <Button type="submit">회원가입</Button>
          <Button onClick={goToMainPage}>돌아가기</Button>
        </main>
      </form>
    </article>
  );
}

export default SignUpPage;
