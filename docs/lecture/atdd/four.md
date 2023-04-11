---
title: 4주차 - 인수 테스트와 리팩터링
sidebar_position: 4
---
# 강의 중 생각 정리
---

## 단위 테스트 vs 인수 테스트
- 단위 테스트는 되고 인수 테스트는 안 되는 경우
- 반대로 인수 테스트는 되고 단위 테스트는 안 되는 경우들이 있다.
- 즉, 둘은 다른 부분을 테스트 하는 것이고 서로를 상호보완하는 경우가 많다

## 모든 의존성을 객체 참조로 구현하면?
- 당연히 결합도 높아짐
- 장점으로 한 객체로 다른 객체를 탐색할 수 있다.
- 조회 복잡도 증가

### 직접 참조, 간접 참조 언제 사용해야 할까?
- [객체 지향 의존성](https://www.youtube.com/watch?v=dJ5C4qRqAgA&ab_channel=%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC)

## 테스트하기 쉬운 코드
- [테스트 하기 쉬운 코드](https://www.youtube.com/watch?v=Cz_a2gQp63c&ab_channel=OKKY)

## 인수 테스트 검증 대상
- 기존에 API 단위로 인수 테스트를 작성했다면
- 더 큰 범위를 다룰 수도 있다. (Journey Test / Story Test)
- 예를 들면 사용자가 기능을 이용하는 플로우를 인수 테스틑 단위로 가져갈 수 있다.

## 레거시 리팩터링을 한다
- 인수 테스트가 있다면?
  - 인수 테스트가 save 포인트가 된다.
  - 조금 더 과감하게 수정이 가능
- 인수 테스트가 없다면?
  - 인수 테스트를 먼저 만드는 것을 추천
  - 인수 테스트가 있을 때의 장점을 가져갈 수 있기에

### 인수 테스트 다음은?
- 인수 테스트를 성공시키기 위한 단위 테스트 작성
- 단위 테스트를 성공시키기 위한 기능 구현
- 단위 테스트 성공 후 리팩터링
- 반복, 반복

### 강의에서 제안하는 Live 서비스 리팩터링 Cycle
1. 기존 테스트/프로덕션 코드는 그대로 두고 새로운 테스트 만들기
2. 새로 기능을 구현하되 1과 마찬가지로 기존 코드는 그대로 두고 새로 만든다.
    - 기존 코드를 사용하기에 기능 이슈는 없음. 단, 기존/신규 코드 혼재 기간을 최대한 짧게..
3. 테스트 성공 후 리팩터링
4. 반복...

## ATDD에 문서화
- ATDD Cycle 자체가 인수 테스트 작성 -> 구현 -> 단위 테스트 순으로 생각한다면
- 인수 테스트 작성과 동시에 문서화를 진행하면
  - 병렬 작업이 가능해짐(명확한 요청/응답)

## 문서화 자동화 도구
- Swagger
- Spring Rest Docs