import express from 'express';
import cors from 'cors';
import pool from './db.mjs';

const app = express();
const port = process.env.PORT || 3006;

app.use(
  cors({
    origin: 'http://localhost:5173', // 🔥 '*' = 모든 요청 허용
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // ✅ 허용할 메서드 지정
    allowedHeaders: ['Content-Type', 'Authorization'], // ✅ 허용할 헤더 지정
    credentials: true, // ✅ 쿠키 포함 요청 허용
  }),
);

// ✅ Preflight 요청 허용
app.options('*', cors());
app.use(express.json()); // ✅ JSON 요청을 처리할 수 있도록 설정

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

app.get('/products', async (req, res) => {
  try {
    const [rows] = await pool.query('select * from products');
    res.json(rows);
  } catch (error) {
    console.log('데이터 연결 실패');
    res.status(500).json({ error: '서버오류' });
  }
});

app.listen(port, () => {
  console.log(`서버실행 완료 :${port}`);
});
