---
title: Cache Abstraction
tag: [backend, spring, cache]
---
## 영상 링크
- [Cache Abstraction Docs](https://docs.spring.io/spring-framework/reference/integration/cache.html)
- [SpEL](https://docs.spring.io/spring-framework/reference/core/expressions.html)

## 내용 정리
- Spring Framework는 3.1 version부터 지원을 시작, 4.1 버전에서 크게 확장되었음

### 1. Cache Abstraction의 이해
#### Cache vs Buffer
- Cache와 Buffer 용어는 종종 같은 의미로 사용되지만 두 용어 사이에는 차이가 존재한다.
- Buffer는 느린 Entity와 빠른 Entity 사이에 데이터 교환을 위한 임시 저장소이다.
  - Producer와 Consumer 사이에 Buffer를 두고 데이터를 쌓아가 Consumer가 데이터를 큰 단위로 읽을 수 있도록 하여 쓰기/읽기 속도 차이에서 발생하는 문제를 해결한다.
  - Buffer는 한 번만 쓰거나 읽을 수 있다.
- Cache는 어느 쪽도 Caching이 발생했다는 사실을 모른다.
  - 또한 동일한 데이터를 여러 번 읽을 수 있도록 하여 성능 향상을 목표로 한다.

#### Cache의 목적
- Java 메서드에 캐싱을 적용하여 실행 횟수를 줄이는 것이 목적이다.
- 메서드가 실행된 적이 없다면 메서드가 호출되고 그 결과가 캐시됨
- 이후로 동일한 요청이 들어오면 캐시 값이 반환되어 메서드 실행으로 발생하는 비용을 줄일 수 있다.
- 때문에 동일한 입력값에 대해 동일한 결과를 반환하는 메서드에만 적용될 수 있다.

#### Cache Abstraction 제공 기능
- Cache 콘텐츠 업데이트 및 제거 기능과 같은 캐시 관련 작업들을 제공한다.
- 단, 캐시 서비스는 구현이 아니라 추상이기 때문에 데이터 저장을 위한 실제 저장소를 사용해야 한다.
- Spring에서 몇 가제 구현을 제공하기도 함 (ConcurrentMap 기반 캐시, Gemfire, Caffeine 등)
- 또한 Cache Abstraction은 멀티 스레드 및 멀티 프로세스 처리가 따로 없어 이러한 기능은 캐시 구현에 의해 처리된다.
- lock이 적용되지 않으며 여러 스레드가 동일한 항목에 읽기/쓰기 작업을 위해 동시에 접근할 수 있다.
- Cache Abstraction을 사용하기 위해서 2가지 관점을 고려해야 한다.
  - Caching declaration: 캐싱이 필요한 메서드와 정책을 확인해야 한다.
  - Cache configuration: 캐시 컨텐츠가 저장되고 읽기 위해 접근해야할 곳.

#### 여러 서버에 App이 배포된 경우 고려할 것들
- 고정 데이터라면 여러 서버에 동일한 데이터를 복사하여 사용할 수 있다.
- 하지만 실행중 데이터가 변한다면 다른 방안을 고려해야 한다.

### 2. Declarative Annotation-based Caching

#### Spring Cache가 제공하는 Java annotations
- `@Cacheable`: cache 생성 trigger
- `@CacheEvict`: cache 제거 trigger
- `@CachePut`: method 실행 없이 cache updates를 수행한다
- `@Caching`: 메서드에 여러 캐시 전략을 적용할 때 사용한다.
- `@CacheConfig`: class-level에서 cache관련 세팅을 적용한다.

#### @Cacheable
```java
// 단일 Cache 적용
@Cacheable("books")
public Book findBook(ISBN isbn) {...}

// 다중 Cache 적용
@Cacheable({"books", "isbns"})
public Book findBook(ISBN isbn) {...}
```
- @Cacheable 어노테이션이 적용된 메서드는 결과값이 Caching되고 이후 같은 요청은 메서드 실행이 아닌 Cache 콘텐츠를 반환하게 된다.
- 즉, 콘텐츠 저장 및 조회 역할이라 이해하면 된다.
- 위 예시처럼 단일/다중 Cache 적용이 가능하고 다중일 경우 순차적으로 저장/조회를 수행한다.

##### Default Key Generation
- Cache는 key-value 저장소이기 때문에 결과에 매핑될 수 있는 Key값이 필요하다.
- Caching Abstraction은 아래 알고리즘을 기반으로 한 KeyGenerator를 활용해 Key를 생성한다.
  1. parameter가 없으면 SimpleKey.Empty를 반환
  2. 1개의 parameter가 주어지면 instance를 반환
  3. 2개 이상의 parameter가 주어지면 모든 parameter를 가지고 있는 SimpleKey를 반환한다.
- 위 전략은 parameter 중 하나가 natural key이고 유효한 hashCode(), equals() 메서드를 가진 경우 정상 동작한다. 
  - Spring 4.0부터 equals() 메서드도 활용하기 시작
- 하지만 그렇지 않다면 방식을 바꿔야 한다.

##### Custom Key Generation Declaration (key value)
```java
@Cacheable("books")
public Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)
```
- 다중 parameter 중 일부만 Cache Key에 적합하다면 몇몇 parameter를 Cache Key로 특정할 수 있다.
- 위 예시처럼 2, 3번째 parameter는 boolean으로 Key에는 적합하지 않다.

```java
@Cacheable(cacheNames="books", key="#isbn")
public Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)

@Cacheable(cacheNames="books", key="#isbn.rawNumber")
public Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)

@Cacheable(cacheNames="books", key="T(someType).hash(#isbn)")
public Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)
```
- 이런 상황에서 위 코드처럼 `key` value를 통해 Key 생성 방식을 지정할 수 있다.
- [SpEL](https://docs.spring.io/spring-framework/reference/core/expressions.html)을 사용하여 원하는 Key를 생성할 수 있다.

```java
@Cacheable(cacheNames="books", keyGenerator="myKeyGenerator")
public Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)
```
- Key 생성 방식이 복잡하거나 공유될 필요가 있을 경우 KeyGenerator를 정의하고 `keyGenerator` value를 통해 지정할 수 있다.
- `key`와 `keyGenerator`는 동시에 사용할 수 없다.



##### Default Cache Resolution
- Cache Abstraction은 구성된 CacheManager를 사용하여 정의된 Cache를 검색하는 간단한 CacheResolver를 사용한다. (매 요청마다 사용됨)
- Custom Cache Resolver를 사용하려면 `org.springframework.cache.interceptor.CacheResolver` 구현체를 만들면 된다.

```java
@Cacheable(cacheNames="books", cacheManager="anotherCacheManager") 
public Book findBook(ISBN isbn) {...}
```
- `cacheManager` value를 활용해 원하는 CacheManager를 지정할 수 있다.

```java
@Cacheable(cacheResolver="runtimeCacheResolver") 
public Book findBook(ISBN isbn) {...}
```
- `cacheResolver` value를 활용해 원하는 CacheResolver 지정할 수 있다.
- `cacheManager`와 `cacheResolver` 또한 동시에 사용할 수 없다.

##### Synchronized Caching
- 초반에 언급했듯이 Cache Abstraction은 lock이 적용되지 않는다.
- 또한 동일한 값이 여러 번 계산되어 Caching이 무의미해질 수 있다.

```java
@Cacheable(cacheNames="foos", sync=true) 
public Foo executeExpensiveOperation(String id) {...}
```
- 이러한 상황에서 `sync=true`를 통해 동기화를 설정할 수 있다.
- 단, 캐시 라이브러리가 이를 지원하지 않을 수도 있다.
  - Spring 제공 라이브러리는 모두 지원함.

##### Conditional Caching
```java
@Cacheable(cacheNames="book", condition="#name.length() < 32", unless="#result == null") 
public Book findBook(String name) {}
```
- booelan을 반환하는 [SpEL](https://docs.spring.io/spring-framework/reference/core/expressions.html) 표현식을 사용하면 parameter에 따라 조건부로 Cache를 적용할 수 있다.
  - `condition` value를 사용
  - true -> Cache 적용, false -> Cache 미적용
  - `unless` value를 활용해 Cache에 Data 저장이 안 되도록 설정할 수도 있다.
  - 위 예시에서는 결과값이 null일 경우 Data 저장을 하지 않는 것을 의미한다.
- [Available Caching SpEL Evaluation Context](https://docs.spring.io/spring-framework/reference/integration/cache/annotations.html#cache-spel-context)

##### Optional 지원
- Cache Abstraction은 Optional을 지원한다.
- Optional 값에 따라 isPresent()가 true라면 value가, 아니라면 null이 저장된다.


#### @CachePut
```java
@CachePut(cacheNames="book", key="#isbn")
public Book updateBook(ISBN isbn, BookDescriptor descriptor)
```
- 메서드 실행 없이 Cache update를 원할 때 사용할 수 있는 annotation이다.
- @CachePut이 붙은 메서드는 항상 실행되고, 항상 결과가 Cache에 저장된다.
- @Cacheable에 사용되는 옵션을 동일하게 지원한다.
- 최적화를 목적으로 하기 보다는 Cache 생성을 목적으로 하는 annotation이다.

##### 주의할 점
- @CachePut과 @Cacheable을 동일한 메서드에 사용하는 것은 권장되지 않는다.
- 단순히 생각해봐도 하나는 캐시 적용을 위한 거고... 


#### @CacheEvict
```java
@CacheEvict(cacheNames="books", allEntries=true) 
public void loadBooks(InputStream batch)
```
- Cache 저장소에서 오래되거나 사용되지 않는 데이터를 제거하는데 사용되는 annotation
- 해당 annotation이 동작할 수 있도록 1개 이상의 저장소가 설정되어 있어야 하고 key resolution, condition등 추가 설정 옵션을 지원한다.
- 예시의 allEntries의 경우 저장소의 모든 데이터를 삭제하는 옵션이다. (당연하게도 지정된 key 무시함)
- beforeInvocation 설정을 통해 Evict 시점을 메서드 실행 이전으로 적용할 수도 있다. (Default는 메서드 실행 후)
  - 메서드 결과와 무관하게 Evict를 실행하고 싶다면 유용하다
- void 메서드와 사용이 가능하다.



#### @Caching
```java
@Caching(evict = { @CacheEvict("primary"), @CacheEvict(cacheNames="secondary", key="#p0") })
public Book importBooks(String deposit, Date date)
```
- 여러개의 동일한 Cache annotation을 단일 메서드에 사용해야 할 경우 활용할 수 있다.

#### @CacheConfig
```java
@CacheConfig("books") 
public class BookRepositoryImpl implements BookRepository {

	@Cacheable
	public Book findBook(ISBN isbn) {...}
}
```
- 일부 옵션의 경우 Class 내의 모든 Cache관련 작업에 적용되어야 할 수도 있다.
- 예를 들어 위 예시처럼 Cache Name을 Class 단위로 적용할 수 있다.
- 이 외에도 CacheManager, KeyGenerator, CacheResolver를 Class 단위로 지정할 수 있다.
- operation-level(@CacheEvict 등)의 설정은 CacheConfig의 설정을 덮어쓴다.
- 추가로 Cache 구현체 설정의 경우 CacheManager bean에서 할 수 있고 항상 global하게 적용된다.


##### 3개의 설정 단계
1. Global Level: CachingConfigurer
2. Class Level: @CacheConfig
3. Operation Level: @CachePut, @CacheEvict 등


#### Enabling Caching Annotations
```java
@Configuration
@EnableCaching
public class AppConfig {

	@Bean
	CacheManager cacheManager() {
		CaffeineCacheManager cacheManager = new CaffeineCacheManager();
		cacheManager.setCacheSpecification(...);
		return cacheManager;
	}
}
```
- Configuration class들 중 한 곳에 @EnableCaching를 추가하여 Cache를 사용할 수 있다.
- 반대로 @EnableCaching를 제거하면 모든 Cache 동작은 멈추게 된다.


##### Cache 사용 시 주의할 점
- public 메서드에만 Cache annotation을 적용해야 한다.
- 그 이유는 protected, private, package-private의 경우 오류는 방생하지 않지만 구성된 캐시 설정이 적용되지 않는다.
- Concrete class에만 Cache annotation을 사용할 것, 만약 interface에 사용할 거라면 프록시 모드를 aspectj가 아닌 proxy로 설정해야 한다.
  - interface에 사용할 일이 생기면 더 알아봐야겠음
- Proxy 모드(default)에서는 Proxy를 통해서 들어온 요청에만 Cache annotation이 적용된다.
  - 즉, 객체 내부에서 사용한 메서드의 경우 Cache annotation이 적용되어 있어도 동작하지 않는다.
  - 이런 문제가 발생하는 경우 aspectj모드를 고려해볼 것
- 또한 Cache annotation이 정상 동작하려면 프록시가 완전히 초기화 되어야 함.
  - 즉, 초기화 과정에서 Cache 기능을 이용할 생각은 하지 말아야....


#### Using Custom Annotations
```java
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD})
@Cacheable(cacheNames="books", key="#isbn")
public @interface SlowService {
}

@SlowService
public Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)
```
- 위 예시처럼 Custom Annotation을 활용해서도 Cache를 적용할 수 있다.