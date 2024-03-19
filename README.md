# Beethoven 🎶
<center>
"뮤지컬의 매력을 한눈에, 출연진과 함께 느껴보세요!"<br/>
출연진들의 종합적인 정보를 한 곳에서 효율적으로 얻을 수 있습니다!
</center>

## 목차  

- [프로젝트 소개](#프로젝트-소개)
- [프로젝트 기능 구헌](#프로젝트-기능-구현)
- [프로젝트 결과 🔥](#프로젝트-결과)

## 프로젝트 소개 
- 선정이유 
  - 기존 사이트의 부족한 정보로 인한 불편함을 해소하기 위해 웹사이트를 개발하였습니다. 이 웹사이트는 사용자가 배우들의 작품 이력 및 관련 기사 등 다양한 정보를 손쉽게 찾을 수 있도록 하여 더욱 풍부한 뮤지컬 관람 경험을 선사합니다.

- 기술적인 목표
  - 적어

- 사용 기술




## 프로젝트 기능 구현

### 1. 출연진 프로필 조회
- 선택한 출연진의 프로필을 제공하며, 더 많은 정보를 검색할 수 있는 링크를 제공합니다.


### 2. 이미지 갤러리
- 선택한 출연진의 이미지 갤러리를 편리하게 탐색할 수 있습니다.


### 3. 작품 활동 정보 
- 출연진의 다양한 작품 활동 정보를 제공합니다.
- 각 작품은 그룹별로 구분되어 있으며 작품 개수와 함께 표시됩니다. 또한 페이지네이션 기능을 통해 사용자가 다양한 작품을 편리하게 탐색할 수 있습니다.


### 4. 관련 뉴스 (Naver API 사용)
- 네이버 API를 활용하여 실시간으로 뉴스 정보를 제공합니다.
- 사용자는 최신순 또는 관련도순으로 뉴스를 정렬하여 확인할 수 있으며, 기사 제목, 내용, 발행일자를 자세히 살펴볼 수 있습니다.


## 프로젝트 결과
`Naver API`를 적용하고 배포하는 과정에서 `CORS(Cross-Origin Resource Sharing)` 에러와 `Axios` 에러를 마주했습니다. CORS 에러에 대한 깊은 이해를 위해 추가적인 공부를 진행하였고, 이 과정에서 기술적인 성장을 이루었습니다. 이러한 경험을 통해 실전에서 문제를 해결하고 기술적인 도전에 직면할 때 더욱 자신감을 갖게 되었습니다.

### 1) CORS 에러 해결과정
src 폴더에 setupProxy.js 파일을 생성합니다.
```jsx
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/v1', {
      target: 'https://openapi.naver.com', // 네이버 API 호스트
      changeOrigin: true, // 호스트 헤더 출처 변경 여부
    }),
  );
};
```

- '/v1' 경로를 가진 API에 대한 프록시 설정
- 요청을 네이버 API 호스트로 전달하고 출처를 변경함으로써 CORS 오류를 해결합니다.

### 2) Axios 에러 해결과정

Vite 빌드 도구를 사용하였기 때문에, package.json이 아닌 vite.config.js 파일에 아래 내용을 추가하였습니다.

```jsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/v1': {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''), // API 경로 변경
        secure: false, // 보안 설정
        ws: true, // 웹 소켓 사용 여부
      }
    }
  }
})
```

- '/v1'을 기준으로 API 경로를 재작성하여 프록시 설정을 수행합니다.
- 네이버 API 호스트를 타겟으로 설정하여 Axios 에러를 해결합니다.

### 3) Netlify 배포 후 API가 로딩되지 않는 문제
#### (1) netlify.toml 파일 생성 및 설정

```toml

[[redirects]]
from = "/proxy/*"
  to = "https://openapi.naver.com/:splat"
  status = 200
  force = true

```

netlify.toml 파일을 생성하고 아래의 코드를 추가했습니다.
netlify 배포환경에서 API 요청에 대한 프록시를 설정합니다.

#### (2) **API 요청 변수 추가하기**

```jsx
const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

axios
      .get(
        `${PROXY}/kart/v1.0/users/nickname/${encodeURI(
          nickname.current.value,
        )}`,
        headers,
      )
      .then(res => console.log(res.data))
      .catch(err => console.error(err))

```
API를 이용하는 컴포넌트에서 요청 URI에 변수를 추가했습니다.
