---
title: redis repositories
sidebar_position: 1
tag: [backend, spring, spring data redis]
---
## 01. 사용 방식
### Entity 정의
```java
@RedisHash("people")
public class Person {

  @Id String id;
  String firstname;
  String lastname;
  Address address;
}
```
- @RedisHash와 @Id를 통해 Domain Entity를 정의할 수 있다.
- @Id값과 @RedisHash의 value 조합으로 key값이 생성된다.

### Repository interface 정의
```java
public interface PersonRepository extends CrudRepository<Person, String> {
}
```
- CrudRepository를 extends한 Repository interface를 정의하면
- Redis Data에 대한 crud 기능을 사용할 수 있다.

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
- 외에도 PagingAndSortingRepository, ReactiveSortingRepository, RxJava3SortingRepository, or CoroutineSortingRepository 등이 존재함

### RedisTemplate 및 EnableRedisRepositories 어노테이션 설정
```java
@Configuration
@EnableRedisRepositories
public class ApplicationConfig {

  @Bean
  public RedisConnectionFactory connectionFactory() {
    return new LettuceConnectionFactory();
  }

  @Bean
  public RedisTemplate<?, ?> redisTemplate(RedisConnectionFactory redisConnectionFactory) {

    RedisTemplate<byte[], byte[]> template = new RedisTemplate<byte[], byte[]>();
    template.setConnectionFactory(redisConnectionFactory);
    return template;
  }
}
```
- RedisConnectionFactory, RedisTemplate 빈 등록과 @EnableRedisRepositories 추가가 필요함

### 실행 코드
```java
@Autowired PersonRepository repo;

public void basicCrudOperations() {

  Person rand = new Person("rand", "al'thor");
  rand.setAddress(new Address("emond's field", "andor"));

  repo.save(rand);            // 1                             

  repo.findOne(rand.getId()); // 2                         

  repo.count();               // 3                         

  repo.delete(rand);          // 4                         
}
```
- (1) 현재 값인 null인 경우 새로운 id를 생성하거나 이미 설정된 id 값을 재사용 (keyspace:id)
- (2) 조회는 설정된 id값을 바탕으로 조회가 진행된다 (keyspace:id)
- (3) keyspace에 존재하는 모든 entity의 개수를 정의한다.
- (4) 주어진 객체를 Redis에서 제거한다

## 02. Time To Live
- 만료기한 설정에는 2가지 방식이 있다
  1. @RedisHash(timeToLive=)를 활용하여 설정하는 방식
  2. @TimeToLive를 활용하는 방식

### @TimeToLive 사용 방식
```java
public class TimeToLiveOnProperty {

  @Id
  private String id;

  @TimeToLive
  private Long expiration;
}

public class TimeToLiveOnMethod {

  @Id
  private String id;

  @TimeToLive
  public long getTimeToLive() {
  	return new Random().nextLong();
  }
}
```
- @TimeToLive 어노테이션을 활용하면 필드 혹은 메소드를 사용하여 만료 기한을 적용할 수 있다.
  - 단, 필드와 메서드 두 곳에 모두 어노테이션을 사용하면 안 된다.
- 단위는 Second이다


## Reference
- [Spring Data - Redis - Repositories](https://docs.spring.io/spring-data/redis/docs/3.0.12/reference/html/#redis.repositories)
- [Spring Data Redis - Repositories](https://docs.spring.io/spring-data-redis/reference/repositories.html)