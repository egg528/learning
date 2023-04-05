---
title: 6. JPQL
sidebar_position: 6
---
## 기본 문법과 쿼리 API
- "Select m from Member as m where m.age > 18"
  - 위 쿼리를 예시로 설명하자면 엔티티와 속성(Member, m.age)은 대소문자를 구분한다.
  - 나머지 키워드(Select, from, where)는 대소문자를 구분하지 않는다.
  - 테이블 이름이 아닌 엔티티 이름을 사용한다. (@Entity(name="xxx"))
  - 별칭은 필수이다.
- TypeQuery
  - 반환 타입이 명확할 때 사용
  - 예시
    - select m.username from Member m
    - select m from Member m , Member.class()
  - 임베디드 타입 조회시 타입 또한 임베디드 타입 class로
  - Join문 사용시 명시할 타입에 대한 고민이 필요
- Query
  - 반환 타입이 명확하지 않을 때 사용
  - 예시
    - select m.username, m.age from Member m
- 결과 조회
  - Query.getResultList()
    - 결과가 하나 이상일 때 리스트로 반환
    - 결과가 없으면 빈 리스트 반환
  - query.getSingleResult()
    - 결과가 하나일 때 단일 객체 반환
    - 결과가 없거나, 둘 이상일 때 예외 발생

  

## 프로젝션
- SELECT 절에 조회할 대상을 지정하는 것을 뜻한다.

  - 엔티티, 임베디드 타입, 스칼라 타입이 가능하다.
  - 엔티티 프로젝션의 경우 조회된 엔티티가 모두 영속성 컨텍스트에서 관리된다.

- 여러 값 조회 "SELECT m.name, m.age FROM Member as m"

  - Query 타입으로 조회 - 선택한 데이터들이 Object[]에 담겨서 반환된다.

  - new 명령어로 조회

    - 반환 값들을 필드로 가진 클래스를 만든다.

    - ```java
      List query1 = em.createQuery( "select new hellojpa.forJPQL.MemberDTO(m.username, m.age) from JP_Member as m where m.id = 1").getResultList();
      ```

    - MemberDTO를 원소로 가진 List를 반환하게 된다.



## 페이징
- setFirstResult - 시작값
- setMaxResults - 가져올 데이터 개수
- JPA의 페이징 기술을 이용하면 개발자는 추상적인 레벨에서 페이징을 고려할 수 있다.
- 구체적인 쿼리는 DB에 맞춰서 자동으로 완성되고 그 수준 또한 사용할 수 있는 수준이다.





## 조인
- 내부 조인
  - [INNER] JOIN
- 외부 조인
  - LEFT [OUTER] JOIN
- 세타 조인
  - 두 엔티티 ","로 나열 - Member m, Team t where m.username = t.name
- ON절을 활용한 조인
  - 조인 대상 필터링
  - 연관관계 없는 엔티티 외부 조인이 가능하다. (연관관계가 없는 엔티티끼리도 가능)


## 서브 쿼리
- JPA라기 보다는 SQL자체적으로 상위 쿼리의 테이블을 서브 쿼리로 들고오면 성능이 잘 안나온다.
  - Select m from Member m where m.age > (select avg(m2.age) from Member m2)
- [MOT] EXISTS (subquery): 서브쿼리에 결과가 존재하면 참
- {ALL | ANY | SOME} (subquery)
- ALL - 모두 만족하면 참
- ANY, SOME - 같은 의미, 조건을 하나라도 만족하면 참
- [NOT] IN (subquery) - 서브쿼리의 결과 중 하나라도 같은 것이 있으면 참
- JPA는 WHERE, HAVING 절에서만 / Hibernate는 SELECT 절도 가능
- 단, FROM 절의 서브 쿼리는 불가능 / 조인으로 푸는 것이 최선


## JPQL 타입 표현과 기타식
- 문자 - '문자'
- 숫자 - 10L(Long), 10D(Double), 10F(Float)
- Boolean - TRUE, FALSE
- ENUM - jpabook.MemberType.ADMIN(패키지명까지 모두 적어야 한다.)
- Entity Type - TYPE(m) = Member


## 조건식
- 기본 CASE 식 - 조건
  - select case when m.age <= 10 then 'YOUNG' else 'OLD' end from Member m
- 단순 CASE 식
  - select case m.name when  '우석' then '나' else '남' end from Member m
- COALESCE - 하나씩 조회해서 null이 아니면 반환
- NULLIF - 두 값이 같으면 null 반환, 다르면 첫번째 값 반환


## JPQL 기본 함수와
- 기본 함수는 DB종류에 상관없이 사용 가능
  - CONCAT
  - SUBSTRING
  - TRIM
  - LOWER
  - UPPER
  - LENGTH
  - LOCATE
  - ABS, SQRT, MOD
  - SIZE, INDEX(JPA 용)
- 사용자 정의 함수
  - 사용하는 DB방언을 상속받고, 사용자 정의 함수를 등록해야 한다.