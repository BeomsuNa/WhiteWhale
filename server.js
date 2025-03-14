import express from 'express';
import pool from './db.mjs';

const app = express();
const port = process.env.PORT || 3006;

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '실행완료',
  });
});

app.get('/users', async (req, res) => {
  try {
    const [rows] = await pool.query('select * from users');
    res.json(rows);
  } catch (error) {
    console.log('데이터 연결 실패!');
    res.status(500).json({ error: '서버오류' });
  }
});

app.listen(port, () => {
  console.log(`서버실행 완료 :${port}`);
});
