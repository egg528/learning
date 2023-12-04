---
title: redis repositories
sidebar_position: 1
tag: [backend, spring, spring data redis]
---
## 01. 기본 개념
```java
public interface CrudRepository<T, ID> extends Repository<T, ID> {

  <S extends T> S save(S entity);      

  Optional<T> findById(ID primaryKey); 

  Iterable<T> findAll();               

  long count();                        

  void delete(T entity);               

  boolean existsById(ID primaryKey);   

  // … more functionality omitted.
}
```
- CrudRepository 제공 기능은 위와 같다
- 메서드에 대한 설명은 직관적이라 따로 필요 없을듯
- ListCrudRepository도 있는데 CrudRepository와 다른 점은 List를 반환한다는 점 뿐이다.

```java
public interface PagingAndSortingRepository<T, ID>  {

  Iterable<T> findAll(Sort sort);

  Page<T> findAll(Pageable pageable);
}
```
- 페이징을 활용한 접근에 필요한 메서드를 가진 interface도 존재함
- Crud와 마찬가지로 ListPagingAndSortingRepository도 존재한다

## 02. Repository 인터페이스 정의하기

## Reference
- [Spring Data - Redis - Repositories](https://docs.spring.io/spring-data/redis/docs/3.0.12/reference/html/#redis.repositories)
- [Spring Data Redis - Repositories](https://docs.spring.io/spring-data-redis/reference/repositories.html)