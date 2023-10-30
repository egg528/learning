---
title: Cache Abstraction
tag: [backend, spring, cache]
---
## 영상 링크
- [Cache Abstraction Docs](https://docs.spring.io/spring-framework/reference/integration/cache.html)

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
- 잠금이 적용되지 않으며 여러 스레드가 동일한 항목에 읽기/쓰기 작업을 위해 동시에 접근할 수 있다.
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