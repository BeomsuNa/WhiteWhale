import React from 'react';
import express from 'express';
import pool from '../db.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    const isMatch = await bcrypt.compare(passWord, user.passWord);
    if (!isMatch) {
      return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });
    }
    const token = jwt.sign(
      { id: user.email, role: user.role },
      process.env.JWT,
      { expiresIn: '1h' },
    );

    res.json({
      token,
      user: {
        user: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: '정보를 받지 못했습니다' });
  }
});

export default router;
