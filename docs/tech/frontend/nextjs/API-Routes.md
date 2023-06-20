---
title: API Routes
tag: [Next.js]
---
## 글 링크
- [API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
-

## 내용 정리
### API Routes란?
- Next.js로 API를 만들 수 있는 솔루션
- `pages/api` 폴더 내부 모든 파일은 `/api/*`로 매핑됨과 동시에 page가 아닌 API endpoint로 여겨진다.
- 때문에 pages/api 내부 파일들은 client-side bundle 사이즈와 무관하다.


### 예시
```typescript
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

```


### Custom config
- 각 API마다 config를 export하여 api configuration을 custom할 수 있다.
- [예시](https://nextjs.org/docs/pages/building-your-application/routing/api-routes#custom-config)


### NextRequest / NextResponse 상속
```typescript
// util/cokies.ts
import { serialize, CookieSerializeOptions } from 'cookie'
import { NextApiResponse } from 'next'
 
/**
 * This sets `cookie` using the `res` object
 */
export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)
 
  if (typeof options.maxAge === 'number') {
    options.expires = new Date(Date.now() + options.maxAge * 1000)
  }
 
  res.setHeader('Set-Cookie', serialize(name, stringValue, options))
}


// pages/api/cokies.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from '../../utils/cookies'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    // Calling our pure function using the `res` object, it will add the `set-cookie` header
    // Add the `set-cookie` header on the main domain and expire after 30 days
    setCookie(res, 'Next.js', 'api-middleware!', { path: '/', maxAge: 2592000 })
    // Return the `set-cookie` header so we can display it in the browser and show that it works!
    res.end(res.getHeader('Set-Cookie'))
}

export default handler
```
- 기본적으로 상속을 권하지 않고 Header에 추가 속성을 넣는 방식을 권장한다.



```typescript
import { NextApiRequest, NextApiResponse } from 'next'
import { withFoo } from 'external-lib-foo'
 
type NextApiRequestWithFoo = NextApiRequest & {
  foo: (bar: string) => void
}
 
const handler = (req: NextApiRequestWithFoo, res: NextApiResponse) => {
  req.foo('bar') // we can now use `req.foo` without type errors
  res.end('ok')
}
 
export default withFoo(handler)
```
- 꼭 상속을 해야한다면 추가 속성을 가진 type을 만들어줘야 한다 (NextApiRequestWithFoo)
- 단, withFoo()가 삭제되어도 컴파일이 정상 동작한다는 점을 조심하자



### Response Helpers
- response.status(code): 상태 코드 설정
- response.json(body): JSON response 전송 (단, body는 serializable object여야 한다)
- response.redirect([status], path): 특정 경로로 redirect한다. status는 HTTP status code여야 하면 특정되지 않을 시 307이 기본값이다.
- response.revalidate(urlPath): getStaticProps를 사용하여 page의 유효성을 제검토한다. 


### Dynamic API Routes
- page Dynamic API Routes와 유사하다
- [예시](https://nextjs.org/docs/pages/building-your-application/routing/api-routes#dynamic-api-routes)



### Edges API Routes
- Node.js API를 사용하지 않는 대신 높은 성능을 내는 솔루션
- [예시](https://nextjs.org/docs/pages/building-your-application/routing/api-routes#dynamic-api-routes)