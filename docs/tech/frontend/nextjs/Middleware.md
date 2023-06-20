---
title: Middleware
tag: [Next.js]
---
## 글 링크
- [Middleware](https://nextjs.org/docs/pages/building-your-application/routing/middleware)
-

## 내용 정리
### Middleware
- Middleware는 요청이 완료되기 이전에 원하는 코드를 동작시킬 수 있는 기능이다.
- rewritting, redirecting, request or response header 변경, 즉시 응답 등을 활용해 response를 변경할 수 있다.
- Middleware는 Cached Content가 동작하기 이전, routing 시스템이 동작하기 이전에 수행된다

### Convention
```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}
```
- root project에 middleware.ts(js) 파일을 통해 구현할 수 있다.
- pages 또는 app과 deeps, src 폴더 내부에서 동작한다.


### Matching Paths
- Middleware는 프로젝트 내 모든 route에서 실행된다
- 동작 순서는 아래와 같다.
1.  headers from next.config.js
2.  redirects from next.config.js
3. `Middleware (rewrites, redirects, etc.)`
4. beforeFiles (rewrites) from next.config.js
5. Filesystem routes (public/, _next/static/, pages/, app/, etc.)
6. afterFiles (rewrites) from next.config.js
7. Dynamic Routes (/blog/[slug]) 
8. fallback (rewrites) from next.config.js


### Matcher
```typescript
// middleware.ts
export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
}
```
- Middleware가 특정 path에서만 동작하도록 제한할 수 있다.
- 표현식: https://nextjs.org/docs/page s/building-your-application/routing/middleware#matcher

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}
```
- 위 코드처럼 request 정보를 기반으로 분기를 태울 수도 있다.


### NextResponse
- 다른 URL로 redirect가 가능하다
- response를 rewrite할 수 있다.
- header 정보를 줄 수 있다.
- response cookies와 header를 설정할 수 있다.


### 활용 예시
- [Use Cookies](https://nextjs.org/docs/pages/building-your-application/routing/middleware#using-cookies)
- [Setting Headers](https://nextjs.org/docs/pages/building-your-application/routing/middleware#using-cookies)
- [Producing a Resposne](https://nextjs.org/docs/pages/building-your-application/routing/middleware#producing-a-response)


