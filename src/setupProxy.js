
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/v1', { // 동일한 endpoint를 가진 api와 모두 매칭 / 엔드포인트 앞쪽에 있는 URL을 프록시로 설정한다. => fetch의 URL을 v1부터 잘라서 써야한다. 이렇게 설정하면 /v1로 들어오는 url은 target의 url로 바꿔서 전송한다
      target: 'https://openapi.naver.com', // 프로토콜 + 호스트
      changeOrigin: true, // 가상 호스팅 사이트용 / (호스트헤더의 출처를 대상URL로 변경합니까? CORS 처리를 위해 수정해야 한다.)
    }),
  );
};