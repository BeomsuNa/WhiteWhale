import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // 이렇게 하면 env 파일 사용할 수 있음

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '3306',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '12345',
  database: process.env.DB_NAME || 'WHITEWHALE',
  waitForConnections: true,
});

export default pool;
