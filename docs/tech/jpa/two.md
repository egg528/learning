---
title: JPA Native Query 사용 시 DTO로 매핑하기
sidebar_position: 1
---
## 글 링크
- [JPA N+1 문제](https://incheol-jung.gitbook.io/docs/q-and-a/spring/n+1)
## 내용 정리
- @OneToMany 관계에서 생기는 문제
- 노선(One) -- 역(Many) 관계를 가정해보자
    - jpaRepository의 findAll()을 사용하면 JPQL을 통해 엔티티(노선)와 필드를 바탕으로 쿼리를 만든다.
    - 이때 노선을 조회하는 쿼리 (1개)와
    - 조회된 노선이 가진 열들을 조회하는 쿼리 (N개)가 발생한다.