---
title: custom errors
tag: [frontend, next.js, custom errors]
---
## 404, 500 페이지
- 매 요청마다 Server가 404 에러 페이지를 rendering해야 한다면 비용이 클 것이다.
- 때문에 pages 폴더 내에 404.js 파일을 만들어 build time에 static하게 생성해둘 수 있다.
- 500.js도 지원해준다. 두 파일 내에서는 필요에 따라 getStaticProps를 사용할 수 있다.



## pages/_error.js
```javascript
function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}
 
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
 
export default Error
```
- 위와 같이 _error.js 파일을 생성해 error을 Controller할 수도 있다.
- 단, _error.js는 production에서만 사용된다. (development에서는 원인 파악을 위해 call stack에 의해 error가 호출됨)

## Reference
- [Custom Error](https://nextjs.org/docs/pages/building-your-application/routing/custom-error)
- [Next.js Error](https://jikor1st.tistory.com/24)
- [React ErrorBoundary](https://jikor1st.tistory.com/23?category=1271628)