import React from 'react';
import express from 'express';
import pool from '../db.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, passWord } = req.body;
  try {
    const [row] = await pool.query('SELECT * FROM users WHERE email=?', [
      email,
    ]);
    const user = row[0];
    if (!user) {
      return res.status(401).json({ message: '등록되지 않은 이메일입니다.' });
    }
    const isMatch = await bcrypt.compare(passWord, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });
    }
    const token = jwt.sign(
      { id: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
    );
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.username,
        role: user.role,
      },
    });
  } catch (err) {
    console.log('❌ 로그인 처리 중 오류:', err);
    return res.status(500).json({ message: '정보를 받지 못했습니다' });
  }
});

export default router;
