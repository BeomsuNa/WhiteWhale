import express from 'express';
import cors from 'cors';
import pool from './db.mjs';
import authRoute from './routes/auth.mjs';

const app = express();
const port = process.env.PORT || 3006;
const allowOrigins =
  process.env.NODE_ENV === 'production'
    ? ['https://whalekeyboard.shop']
    : ['http://localhost:5173'];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS 차단됨${origin}`));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);

// ✅ Preflight 요청 허용
app.options('*', cors());
app.use(express.json()); // ✅ JSON 요청을 처리할 수 있도록 설정

app.use('/api', authRoute);
app.listen(port, '0.0.0.0', () => {
  console.log(`서버실행 완료 :${port}`);
});

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
    console.error('❌ 상품 조회 오류:', error);
    res.status(500).json({ error: '서버 오류' });
  }
});
