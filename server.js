import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(port, () => {
  console.log('서버실행 완료');
});
