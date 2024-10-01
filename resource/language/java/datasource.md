---
title: datasource
tag: [language, java, datasource]
---
## DataSource란?
DB 연결을 위한 Factory
DriverManager의 대안으로 나온 개념이다.
커넥션을 맺어주고 / 커넥션 풀릭을 지원하며 / 분산 트랜잭션에서 사용이 가능하다

## Bean 등록 방법
단일 Datasource: 설정 정보에 특정 데이터를 넣으면 자동 생성
복수 Datasource: 직접 Bean 등록 해줘야함

## Reference
- [DataSource란?](https://velog.io/@byeongju/DataSource-cbd8ln4x)
- [DataSource Bean 등록 방법](https://blog.jiniworld.me/69#a01)