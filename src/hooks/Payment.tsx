import App from "@/App";

import 
;
// JSON 요청을 처리하기 위해 body-parser 미들웨어 세팅
App.use(bodyParser.json());

// POST 요청을 받는 /payments/complete
app.post('/payment/complete', async (req, res) => {
  try {
    // 요청의 body로 paymentId가 전달되기를 기대합니다.
    const { paymentId, orderId } = req.body;

    // 1. 포트원 결제내역 단건조회 API 호출
    const paymentResponse = await fetch(
      `https://api.portone.io/payments/${paymentId}`,
      { headers: { Authorization: `PortOne ${PORTONE_API_SECRET}` } },
    );
    if (!paymentResponse.ok)
      throw new Error(`paymentResponse: ${await paymentResponse.json()}`);
    const payment = await paymentResponse.json();

    // 2. 고객사 내부 주문 데이터의 가격과 실제 지불된 금액을 비교합니다.
    const order = await OrderService.findById(orderId);
    if (order.amount === payment.amount.total) {
      switch (payment.status) {
        case 'VIRTUAL_ACCOUNT_ISSUED': {
          // 가상 계좌가 발급된 상태입니다.
          // 계좌 정보를 이용해 원하는 로직을 구성하세요.
          break;
        }
        case 'PAID': {
          // 모든 금액을 지불했습니다! 완료 시 원하는 로직을 구성하세요.
          break;
        }
      }
    } else {
      // 결제 금액이 불일치하여 위/변조 시도가 의심됩니다.
    }
  } catch (e) {
    // 결제 검증에 실패했습니다.
    res.status(400).send(e);
  }
});
