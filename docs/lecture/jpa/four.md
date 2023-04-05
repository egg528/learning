---
title: 4. 값 타입
sidebar_position: 4
---
## 상속관계 매핑

- "객체의 상속 구조"와 "DB의 슈퍼타입 서브타입 관계"를 매핑하는 것
- @Inheritance
  - JOINED: 조인 전략(부모와 하위 타입 테이블이 각각 있고 JOIN해서 사용)
  - SINGLE_TABLE: 단일 테이블 전략(한 테이블에 모든 하위 타입 속성을 넣는다.)
  - TABLE_PER_CLASS: 구현 테이블마다 테이블 전략(하위 타입 테이블에 부모 속성을 중복해서 넣는다.) 부모 클래스는 추상 클래스로 만들어야 함.
  - 데이터도 적고 사용하는 방식도 단순하다면 SINGLE_TABLE 전략을, 사용 방식이 복잡하다면 JOINED 전략을 우선적으로 고려해 볼 것.
- @DiscriminatorColumn
  - 하위 타입을 구분하는 문자열 속성을 부모 타입 테이블 속성으로 명시해준다. DTYPE
- @MappedSuperclass
  - 예를 들어 A, B, C 테이블에 공통 매핑 정보(공통 속성)가 필요할 때 사용한다.
  - 테이블과는 관계가 없고, 단순히 엔티티가 공통으로 사용하는 매핑 정보를 모으는 역할
- @Entity 클래스가 상속할 수 있는 클래스
  - 다른 @Entity 클래스
  - @MappedSuperclass 클래스