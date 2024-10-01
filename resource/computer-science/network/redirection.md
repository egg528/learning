---
title: redirection
tag: [HTTP, Redirection]
---
## Redirection이란?
- 요청을 완료하기 위해 유저 에이전트의 추가 조치 필요
- 웹 브라우저는 3xx 응답의 결과에 Location 헤더가 있으면 Location 위치로 자동 이동함

## 종류
### 1. 영구 리다이렉션
  - 특정 리소스의 URI가 영구적으로 이동
  - 이전 URL을 사용하지 않는 경우
  - 301 (Moved Permanently)
    - 리다이렉트시 요청 메서드가 GET으로 변하고, 본문이 제거될 수 있음
  - 308 (Permanent Redirect)
    - 301과 기능은 같다
    - 리다이렉트시 요청 메서드와 본문 유지
### 2. 일시 리다이렉션
  - 일시적인 이동
  - 예: 주문 완료 후 주문 내역 화면으로 이동
  - 302 (Found)
    - 리다이렉트시 요청 메서드가 GET으로 변하고, 본문이 제거될 수 있음
  - 307 (Temporary Redirect)
    - 302과 기능은 같다
    - 리다이렉트시 요청 메서드와 본문 유지
  - 303 (See Other)
    - 302와 기능은 같다
    - 명확하게 요청 메서드를 GET으로 변경함 (302는 명확하게 GET으로 변경하는 건 아님)
  - RPG (Post/Redirect/Get)
    - Post로 주문 후에 웹 브라우저를 새로고침하면?
      - 중복 주문이 될 수 있다. (새로고침을 하면 마지막 요청을 다시 보내기 때문에)
    - 이때 Post 주문 후 결과 화면을 GET 메서드로 리다이렉트
      - 새로고침을 해도 GET으로 조회함
- 특수 리다이렉션
  - 결과 대신 캐시를 사용  
  - 300 (Multiple Choices)
    - 안 쓴다
  - 304 (Not Modified)
    - 캐시를 목적으로 사용한다. (캐시로 리다이렉트함)

## Reference
- [HTTP 인프런 강의](https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC/dashboard)
