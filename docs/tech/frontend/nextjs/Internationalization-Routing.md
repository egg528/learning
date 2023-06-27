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


##### (3) Automatic Locale Detection
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
- 위 설정을 통해 기능을 끌 수도 있다.