---
title: react hydration error
tag: [frontend, next.js, react hydration error]
---
## 글 링크
- [Text content does not match server-rendered HTML](https://nextjs.org/docs/messages/react-hydration-error)

## 내용 정리
- Server에서 pre-render된 React tree와 Browser에서 처음으로 render된 React tree가 달라서 발생하는 문제
  - Server에서 생성된 pre-render HTML을 interactive application으로 변환하는 시점을 Hydration이라 한다.
  - 때문에 오류가 발생할 때 `hydration failed` 문구가 나옴

### 공식 문서에서는 6가지 정도의 원인을 제시한다.
1. 부적절한 HTML tag 중복 (p tag 내에 또 다른 p tag 존재, p tag 내부에 div tag 존재, Interactive Content의 중첩)
2. rendering 로직에 `typeof window !== 'undefined'`이 포함된 경우
3. `window` 또는 `localStorage`와 같은 browser-only API가 로직에 포함된 경우
4. [Browser extensions가 HTML을 변경하는 경우](https://github.com/facebook/react/issues/24430)
5. CSS-in-JS libraries가 잘못 구성된 경우
6. 잘못 구성된 Edge/CDN이 HTML response를 수정할 경우

### 해결책
#### 1. useEffect를 활용하여 client에서만 동작하는 것을 보장하는 방법
```javascript
import { useState, useEffect } from 'react'
 
export default function App() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
 
  return <h1>{isClient ? 'This is never prerendered' : 'Prerendered'}</h1>
}
```
- 이 방식은 client-side의 초기 render content를 server-side와 일치시켜 문제를 해결한다.
- browser API를 사용할 수 있음

#### 2. 특정 Component를 CSR로 강제한다.
```javascript
import dynamic from 'next/dynamic'
 
const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })
 
export default function Page() {
  return (
    <div>
      <NoSSR />
    </div>
  )
}
```
- prerendering이 동작하지 않도록 설정하여 hydration 불일치를 막는다.

#### 3. 태그 내에 Hydration 오류 허용 표시
```javascript
<time datetime="2016-10-25" suppressHydrationWarning={true} />
```
- timestamp와 같이 server와 client의 content가 불일치가 불가피할 경우 오류를 무시하도록 설정할 수도 있다.