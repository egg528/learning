---
title: 4. 프록시와 연관관계 관리
sidebar_position: 5
---
## 문제 상황

- Member - Team 관계를 생각해보자
  - Member 엔티티 필드로 Team을 가진 상황
  - 하지만 비즈니스 케이스 별로 Team이 정보가 필요한 경우도 있고 필요하지 않은 경우도 있다면?
  - Team 정보가 필요하지 않다면 불필요하게 Join을 하는 상황이 된다.

  
## 프록시란?

- em.find() - 실제 엔티티 객체 조회
- em.getReference() - 데이터베이 스 조회를 미루는 가짜 엔티티 객체 조회
  - 하이버네이트가 Proxy객체를 반환한다.
  - 프록시 객체는 실제 객체의 참조(Target)을 보관한다.
  - 프록시 객체를 호출하면 프록시 객체가 실제 객체를 호출하게 된다.
  - 동작 순서
    - em.getReference() -> Proxy 객체 생성
    - Proxy 객체 메서드(getName) 호출
    - 영속성 컨텍스트에 초기화 요청 -> DB 조회 -> 실제 Entity 생성 (첫 생성 후에는 생성한 엔티티 이용)
    - Proxy 객체의 target을 통해 실제 엔티티 메서드 호출
- 프록시 특징
  - 실제 엔티티 초기화는 한 번만
  - 프록시가 실제 엔티티에 접근하는 것이지 바뀌는 게 아님
  - 실제 엔티티를 상속하기에 타입 체크시 주의 (== 안됨)
  - 영속성 컨텍스트에 엔티티가 있다면 Proxy 객체가 아닌 실제 엔티티가 반환됨
    - 영속성 컨텍스트를 통해 같은 PK 엔티티를 가져오면 항상 == 비교가 True로 나와야 함
    - Find 메서드 후 Reference 메서드 사용시 둘 다 Entity 반환
    - Reference 메서드 후 Find 사용시 둘 다 Proxy 반환
  - 프록시 객체가 준영속 상태일 때, 엔티티 초기화 불가능하다.
    - 프록시 인스턴스의 초기화 여부 확인
      - PersistenceUnitUtil.isLoaded(Object entity)
    - 프록시 강제 초기화
      - Org.hibernate.Hibernate.initialize(entity)



## 지연 로딩

- Member - Team 문제로 돌아와서
- Member 엔티티의 Team 필드의 ManyToOne 어노테이션에 fetch=FetchType.LAZY 설정
  - 엔티티 조회시 Team 객체를 초기화 되지 않은 프록시 객체로 둔다.
  - 이후 Team을 조회할 때 Join문을 사용해 프록시 객체를 초기화 한다.


## 즉시 로딩

- EAGER 어노테이션 사용 시 Member를 조회할 때 Team 엔티티도 함께 조회. (Join문)


## 권장 사항

- 실무에서는 즉시 로딩을 사용하지 말 것...
  - 즉시 로딩을 적용하면 전혀 예상하지 못한 SQL 발생
  - JPQL에서 N+1 문제
- @ManyToOne, @OneToOne => 기본이 즉시 로딩
- @OneToMany, @ManyToMany => 기본이 지연 로딩



# 영속성 전이: CASCADE

- 특정 Entity를 영속 상태로 만들 때, 연관된 Entity도 함께 영속 상태로 만들고 싶다면 사용
- 연관관계와는 전혀 상관이 없음
- CASCADE
  - ALL: 모두 적용
  - PERSIST: 영속에만 적용
  - REMOVE: 삭제에만 적용

- 단, 하위 테이블 데이터를 관리하는 곳이 여러 곳일 경우에는 사용하면 안 된다.
  - 예, Parent - Child에서 Child를 다른 테이블에서도 관리한다면 사용 X


# 고아 객체

- 부모 엔티티와 연관관계가 끊어진 자식 엔티티를 자동으로 삭제
- orphanRemoval = true
- 참조하는 곳이 하나일 때 사용.
- @OneToOne, @OneToMany만 사용 가능
- CASCADE REMOVE처럼 동작한다.


# 영속성 전이 + 고아 객체, 생명 주기

- CASCADE:ALL + orphanRemovel = true
- 두 옵션의 활성화를 통해 부모 엔티티로 자식의 생명 주기를 관련할 수 있음