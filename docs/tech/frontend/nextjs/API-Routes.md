---
title: API Routes.md
tag: [Next.js]
---
## 글 링크
- [API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
-

## 내용 정리
### API Routes란?
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
- Next.js로 API를 만들 수 있는 솔루션이다.
- `pages/api` 폴더 내부에 모든 파일은 `/api/*`로 매핑됨과 동시에 page가 아닌 API endpoint로 여겨진다.
- 때문에 pages/api 내부 파일들은 client-side bundle 사이즈와 무관하다. (사용자들에게 전송하는 pages들과는 무관)
- [pageExtensions configuration](https://nextjs.org/docs/pages/api-reference/next-config-js/pageExtensions)을 적용할 수 있다

#### 생성 방법
- 위 예시에서 처럼 NextApiRequest와 NextApiResponse를 파라미터로 받는 function을 export해야 한다. 
- 함수 명은 자유롭게 작성할 수 있고 path와는 관계 없다.


#### 주의할 점
- CORS에 대한 설정이 되어 있지 않아 SOP를 따른다. [(CORS 설정 예시)](https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors)
- [static export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)를 사용할 수 없음

---


### NextRequest
- Next.js는 incomming request를 parsing한 NextRequest를 제공한다.
  - cookies, query, body 필드를 통해 cookie, query string, body 정보를 얻을 수 있다.

#### Custom config
```javascript
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}
```
- 각 API endpoint마다 config를 export하여 api configuration을 custom할 수 있다.

##### bodyParser
```javascript
export const config = {
  api: {
    bodyParser: false,
  },
}
```
- bodyParser 기능은 기본적으로 true이기 때문에 Stream 혹은 raw-body로 받고 싶다면 false 설정을 해줘야 한다.

```javascript
// sizeLimit
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '500kb',
        },
    },
}
```
- parsing된 body의 용량을 제한할 때 사용한다.
  

```javascript
// externalResolver
export const config = {
    api: {
        bodyParser: {
            externalResolver: true,
        },
    },
}
```
- express와 같은 외부 resolver에 의해 동작한다고 명시해주는 일종의 flag
- 설정한 API의 경우 unresolved requests에 대한 경고가 사라진다


```javascript
// responseLimit
export const config = {
    api: {
        responseLimit: '8mb',
    },
}
```
- 말 그대로 response 용량에 제한을 두는 것 (default는 4MB)



#### NextRequest / NextResponse 상속
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
- 기본적으로 상속을 권하지 않고 function을 이용해 Header에 데이터를 추가하는 방식을 권장한다.



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



### NextApiResponse
#### 기능들
```javascript
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
```
- response.status(code): 상태 코드 설정


```javascript
export default async function handler(req, res) {
  try {
    const result = await someAsyncOperation()
    res.status(200).json({ result })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
```
- response.json(body): JSON 형태로 response 전송 (단, body는 serializable object여야 한다)

```javascript
export default async function handler(req, res) {
  try {
    const result = await someAsyncOperation()
    res.status(200).send({ result })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}
```
- response.send(body): string, object, Buffer 형태로 response 전송

```javascript
export default async function handler(req, res) {
  const { name, message } = req.body
  try {
    await handleFormInputAsync({ name, message })
    res.redirect(307, '/')
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}
```
- response.redirect([status], path): 특정 경로로 redirect한다. status는 HTTP status code여야 하면 특정되지 않을 시 307이 기본값이다.
- response.revalidate(urlPath): getStaticProps를 사용하여 page의 유효성을 제검토한다. (ISR Rendering 개념)
#### TypeScript type 추가
```javascript
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
```
- Request와 Response에 Type을 추가하여 type-safe하게 데이터를 전달할 수 있다.

### Dynamic API Routes
```javascript
// pages/api/post/[pid].js
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  const { pid } = req.query
  res.end(`Post: ${pid}`)
}
```
- NextApiRequest의 query 필드를 통해 query string 접근 가능
- page Dynamic API Routes와 유사하다

#### 파일명 - 매칭 path 정리
- pages/api/post/[pid].js -> api/post/1, api/post/2, api/post/3
- pages/api/post/[...pid].js -> api/post/1, api/post/1/2, api/post/1/2/3 ...
- pages/api/post/[[...pid]].js -> api/post, api/post/1, api/post/1/2, api/post/1/2/3 ...



### Edges API Routes
```javascript
export const config = {
  runtime: 'edge',
}
 
export default (req) => new Response('Hello world!')
```
- Node.js API를 사용하지 않는 대신 높은 성능을 내는 솔루션
- API Routes가 Node.js runtime을 사용하는 반면 Edge API는 Edge Runtime을 사용한다.


#### JSON Response 예시
```javascript
import type { NextRequest } from 'next/server'
 
export const config = {
  runtime: 'edge',
}
 
export default async function handler(req: NextRequest) {
  return new Response(
    JSON.stringify({
      name: 'Jim Halpert',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}
```



#### Cache-Control 예시
```javascript
import type { NextRequest } from 'next/server'
 
export const config = {
  runtime: 'edge',
}
 
export default async function handler(req: NextRequest) {
  return new Response(
    JSON.stringify({
      name: 'Jim Halpert',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
      },
    }
  )
}
```


#### Query Parameter 사용 예시
```javascript
import type { NextRequest } from 'next/server'
 
export const config = {
  runtime: 'edge',
}
 
export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  return new Response(email)
}
```


#### Forwarding Headers 예시
```javascript
import { type NextRequest } from 'next/server'
 
export const config = {
  runtime: 'edge',
}
 
export default async function handler(req: NextRequest) {
  const authorization = req.cookies.get('authorization')?.value
  return fetch('https://backend-api.com/api/protected', {
    method: req.method,
    headers: {
      authorization,
    },
    redirect: 'manual',
  })
}
```

