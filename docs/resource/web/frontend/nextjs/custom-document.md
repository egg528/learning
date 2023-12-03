---
title: custom document
tag: [frontend, next.js, custom document]
---
## Custom Document란?
- _document 파일을 통해 사용할 수 있다.
- html, body와 같은 태그를 Update할 수 있다.
- 단, Server Render만 가능하기 때문에 onClick과 같은 Event Handler는 사용할 수 없다.

```javascript
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
```
- 위 4개의 태그는 필수적으로 포함되어야 한다.

## 주의 사항
- 위 Head 컴포넌트는 next/head의 Head 컴포넌트와 다르다.
- next/document Head는 모든 페이지에 적용된다.
- <Main/> 외부의 컴포넌트는 Browser에 의해 초기화되지 않는다. 때문에 application 로직을 위 파일에 작성하면 안 된다.
- getStaticProps or getServerSideProps는 지원하지 않는다.


## Customizing renderPage
```javascript
import Document, { Html, Head, Main, NextScript } from 'next/document'
 
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage
 
    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })
 
    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)
 
    return initialProps
  }
 
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
 
export default MyDocument
```


## Reference
- [Custom Document](https://nextjs.org/docs/pages/building-your-application/routing/custom-document)