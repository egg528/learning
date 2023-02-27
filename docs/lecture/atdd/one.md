---
title: 1주차 - 인수 테스트와 E2E 테스트
sidebar_position: 1
---
# 강의 중 생각 정리
---
## ATDD 이야기를 하기 전에
- 단위 테스트: 시나리오/의도라기 보다는 구현한 대로 동작하는가를 검증
- 인수 테스트: 시나리오/의도대로 동작하는가를 검증


## ATDD를 하는 이유
- 생산성 증가
- 작업의 명확한 시작과 끝을 제시: 테스트 작성 -> 기능 구현 및 테스트 성공
- 귀찮은 작업 강제화

## 인수 테스트란?
- 사용자 스토리를 검증하는 기능 테스트
- 마지막 단계에서 수행하는 테스트를 의미 (작업을 끝낼 수 있는 테스트)


## 개발을 위한 시나리오 기반 인수 테스트 만들기
- 요구사항을 시나리오로 작성하면 작업이 작은 단위로 그려지고 개발에 더욱 용이해 보인다.
1. 요구사항을 시나리오화 한다.
2. 시나리오를 작은 단위로 쪼갠다 (작은 단위를 테스트 한다 -> 단위테스트)
3. 작은 단위가 아닌 시나리오를 검증하는 테스트가 인수 테스트?


## 이번 과정에서의 인수 테스트
- 인수 테스트는 테스트 의도에 따라 정해진다.
- 즉, 구현 방식(형태)으로 인수 테스트를 규정하기 보다는 인수를 목적으로 시나리오를 검증하려는 테스트를 작성한다면 인수 테스트인 것 
  - 사용자 입장의 테스트 (Black Box)

## 인수 테스트 도구 설명
- Test Server
  - SpringBootTest
- Client
  - RestAssured
  - MockMVC
  - WebTestClient
- Response Body Parsing
  - JsonPath(Json)
- Cucumber

### ATDD 주도 개발
- 최대한 실제와 비슷한 환경을 구성
  - SpringBootTest: RANDOM_PORT 등등

### Rest-Assured
- 링크: https://rest-assured.io/
- 설명: REST 기반 서비스의 테스트를 단순화하기 위한 Java DSL. POST, GET, PUT, DELETE, OPTIONS, PATCH 및 HEAD 요청을 지원하며 이에 대한 응답을 테스트할 수 있다.

### @DirtiesContext
- Spring Context를 이용한 Test는 기본적으로 Context를 공유한다.
- 때문에 개별로 성공하는 Test도 2개 이상이 되었을 때 실패하는 경우가 종종 생긴다. 
- 이때 Context 재생성 시점을 지정할 수 있는 어노테이션
- 설정 값 - @DirtiesContext(methodMode = ?)
  - Class에서 Default: 클래스 내 모든 테스트가 종료 이후
  - BEFORE_EACH_TEST_METHOD: 모든 테스트 케이스 시작 이전에
  - AFTER_EACH_TEST_METHOD: 모든 테스트 케이스 종류 이후
  - BEFORE_METHOD: 특정 테스트 케이스 이전
  - Method에서 Default: 테스트 케이스 이후
- 메모리 DB이 경우 Context가 재생성되면 DB 내용도 초기화됨


### @Sql
- 원하는 시점에 쿼리를 실행할 수 있는 어노테이션
- @Sql을 활용해 원하는 테스트 환경울 구성할 수 있다.
- 또 테스트할 부분에만 집중할 수 있음
  - EX) 인수 테스트에서 데이터 삭제를 위해 데이터 생성 API를 실행하지 않아도 된다.
  - -> 데이터 삭제 기능에만 집중할 수 있다.

### Table Truncate
- 테이블을 생성 초기 상태로 만드는 작업
- Delete와의 차이점
  - Delete는 로우를 일일이 지우는 반면, Truncate는 데이터를 한번에 지운다.
  - Delete는 COMMIT을 포한하지 않는 반면, Truncate는 COMMIT이 포한된 명령이다. (ROLLBACK 사용 가능 여부)

### SpringBootTest vs SpringExtension
- SpringBootTest는 Context와 Bean을 모두 제공한다.
- 반면 SpringExtension은 Context만 제공하여 Bean을 직접 생성해줘야 한다.
- 특정 Layer만 테스트 (특정 Layer만 Bean으로 등록해줌)
  - @WebMvcTest
  - @Data~Test

