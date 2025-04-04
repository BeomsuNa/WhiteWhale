import react from 'react';
import bcrypt from 'bcrypt';

const hashPassWord = async plain => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(plain, salt);
  console.log('현재 해쉬 비밀번호는 다음과 같습니다:', hash);
};

hashPassWord('1234');
