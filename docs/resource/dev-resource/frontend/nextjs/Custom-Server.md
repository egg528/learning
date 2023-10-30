---
title: Custom Server
tag: [frontend, next.js, custom server]
---
## 글 링크
- [Custom Server](https://nextjs.org/docs/pages/building-your-application/configuring/custom-server)
- [Automatic Static Optimization](https://nextjs.org/docs/pages/building-your-application/rendering/automatic-static-optimization)

## 내용 정리
- 기본적으로 Next.js `next start`로 실행할 수 있는 내장 서버를 가지고 있다.
- 하지만 Server 처리를 자신의 App에 맞게 상용할 수 있도록 Custom Server도 지원하고 있다.
- 자신의 상황에 맞게 사용할 수 있지만, 2가지 단점을 가진다.

### Custom Server 단점
#### 1. important performance optimizations가 사라진다.
- 공식 문서에서는 performance optimizations 예시로 serverless function과 Automatic Static Optimization을 제시함.
  - `getServerSideProps` 혹은 `getInitialProps`가 없는 페이지를 자동으로 static 페이지로 변환하다.

#### 2. Vercel 배포가 불가능하다.