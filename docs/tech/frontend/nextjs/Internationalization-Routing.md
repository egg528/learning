---
title: Internationalization (i18n) Routing
tag: [Next.js]
---
## 글 링크
- [Internationalization Routing](https://nextjs.org/docs/pages/building-your-application/routing/internationalization)

## 내용 정리
### Internationalization (i18n) Routing 방법
#### 1. next.config.js 파일 내에 i18n config를 추가
```javascript
module.exports = {
    i18n: {

        // 앱에서 지원할 모든 언어 넣기
        locales: ['en-US', 'fr', 'nl-NL'],

        // non-locale prefixed path로 접근했을 경우 default로 설정할 언어
        defaultLocale: 'en-US',

        // Domain Routing을 사용할 경우 필요한 항목
        // 자세한 건 아래에서
        domains: [
            {
                domain: 'example.com',
                defaultLocale: 'en-US',
            },
            {
                domain: 'example.nl',
                defaultLocale: 'nl-NL',
            },
            {
                domain: 'example.fr',
                defaultLocale: 'fr',
                // an optional http field can also be used to test
                // locale domains locally with http instead of https
                http: true,
            },
        ],
    },
}
```


#### 2. Locale 전략 정하기
##### (1) Sub-path Routing - locale 별로 path에 값을 넣는 방식
- 예시: /blog, /fr/blog, /en-US/blog
```javascript
module.exports = {
    i18n: {
        locales: ['en-US', 'fr', 'nl-NL'],
        defaultLocale: 'en-US',
    },
}
```
- 설정 방식

##### (2) Domain Routing - locale 별로 다른 도메인을 가지도록
- 예시: example.com/blog, www.example.com/blog, example.fr/blog, example.nl/blog, example.nl/nl-BE/blog
```javascript
module.exports = {
    i18n: {
        locales: ['en-US', 'fr', 'nl-NL', 'nl-BE'],
        defaultLocale: 'en-US',

        domains: [
            {
                // Note: subdomains must be included in the domain value to be matched
                // e.g. www.example.com should be used if that is the expected hostname
                domain: 'example.com',
                defaultLocale: 'en-US',
            },
            {
                domain: 'example.fr',
                defaultLocale: 'fr',
            },
            {
                domain: 'example.nl',
                defaultLocale: 'nl-NL',
                // specify other locales that should be redirected
                // to this domain
                locales: ['nl-BE'],
            },
        ],
    },
}
```


##### (3) Locale 자동 감지
- user가 application root (대개 '/')에 접근했을 때 header의 Accept-Language 정보와 Domain을 기반으로 locale을 감지하는 것
- sub-path를 이용할 경우 prefixed path를 자동 추가해주고, domain routing을 이용할 경우 domain을 변경해준다.
- 예를 들어 Accept-Language header가 fr;q=0.9일 경우 fr/을 추가해주거나 example.fr로 redirect 해준다.

```javascript
module.exports = {
    i18n: {
        localeDetection: false,
    },
}
```
- Automatic Locale Detection은 기본 값이 true이고 위 설정을 통해 끌 수 있다.


##### (4) locale 정보 접근하기
- locale 정보에 접근하는 여러 방법이 있지만, docs에서는 useRouter() hook을 예시로 사용한다.

```javascript
import { useRouter } from "next/router";
const { locale, locales, defaultLocale } = useRouter();
```
- locale: 현재 사용중인 locale 정보
- locales: 사용 가능한 모든 locales 정보
- defaultLocale: default locale 정보




##### (5) locale 전환하기
```javascript
// next/link 활용
import Link from 'next/link'

export default function IndexPage(props) {
    return (
        <Link href="/another" locale="fr">
            To /fr/another
        </Link>
        // <Link href="/fr/another" locale={false}>
        //     To /fr/another
        // </Link>
        // 이렇게 사용도 가능
    )
}


// next/router 활용
import { useRouter } from 'next/router'

export default function IndexPage(props) {
    const router = useRouter()

    return (
        <div
            onClick={() => {
                router.push('/another', '/another', { locale: 'fr' })
            }}
        >
            to /fr/another
        </div>
    )
}


// 이전 Routing 정보를 유지하면서 locale을 바꾸는 방법
import { useRouter } from 'next/router'
const router = useRouter()
const { pathname, asPath, query } = router

router.push({ pathname, query }, asPath, { locale: nextLocale })
```
- next/link, next/router를 통해 locale을 변경할 수 있다.
- next/link, next/router 방식이 있음



##### (6) 커스텀 쿠키로 locale 구분하기 (헤더의 Accept-Language 값 사용하지 않도록 설정)
- `NEXT_LOCALE=?` 이름의 커스텀 쿠키를 브라우저에 넣으면 된다.
- NEXT_LOCALE 쿠키 >>> Acceptence-Language


##### (7) 검색 성능 최적화
- next.js는 자동으로 html 태그에 lang 특성을 추가한다.


##### (8) Static Generation에서 locale 사용하기
```javascript
// pages/blog/[slug].js
export const getStaticPaths = ({ locales }) => {
  return {
    paths: [
      // if no `locale` is provided only the defaultLocale will be generated
      { params: { slug: 'post-1' }, locale: 'en-US' },
      { params: { slug: 'post-1' }, locale: 'fr' },
    ],
    fallback: true,
  }
}
```
- using getStaticProps + Dynamic Routes = 위와 같이 getStaticPath를 통해 반환된 조합들(page+locale)만 prerender 된다
- using getStaticProps + non-Dynamic Routes = 모든 조합이 prerender 된다
    - build 시간이 늘어날 수 있기에 prerender 페이지 양을 고려해봐야 한다.


###### 해결 방안
- fallback Mode를 사용하면 가장 인기 있는 경로와 path만 getStaticPaths에서 return하게 된다.
    - [fallback mode](https://nextjs.org/docs/pages/api-reference/functions/get-static-paths#fallback-true)
- 나머지 페이지는 runtime시 요청에 의해 build되기에 초기 build 시간을 줄일 수 있다.

```javascript
export async function getStaticProps({ locale }) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`https://.../posts?locale=${locale}`)
    const posts = await res.json()

    if (posts.length === 0) {
        return {
            notFound: true,
        }
    }

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}
```
- non-Dynamic Routes에서도 특정 locale의 Pre-render를 제외할 수 있다.
- 조건문을 이용해 특정 경로 nonFound를 return해주면 된다. (이 경우 아예 생성되지 않고 요청이 와도 render되지 않는다)


##### (9) i18n config 제한
- locale은 100개까지
- domains도 100개까지 등록 가능