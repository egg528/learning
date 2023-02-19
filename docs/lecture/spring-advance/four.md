---
title: 프록시 패턴
sidebar_position: 4
---
## 현재 문제점
- 로그 추적기를 적용할 때, 코드 수정을 템플릿 메서드 패턴과 콜백 패턴을 활용
- 하지만 여러 Controller, Service, Repository에 로그 추적기를 적용한다고 생각해보면
  - 너무 많은 코드 수정이 필요...

## 추가 요구사항
- 원본 코드를 수정하지 않아야 한다.
- 특정 메서드만 로그를 출력해야 한다.
- 아래 3가지 Case 모두 적용이 가능해야 한다.
  - v1 - 인터페이스가 있는 구현 클래스에 적용 
  - v2 - 인터페이스가 없는 구체 클래스에 적용 
  - v3 - 컴포넌트 스캔 대상에 기능 적용


## 프록시, 프록시 패턴, 데코레이터 패턴
- 가정
  - Client: 요청을 하는 객체  
  - Server: 요청을 처리하는 객체
- 
### 직접 호출과 간접 호출
![직접호출.png](img/%EC%A7%81%EC%A0%91%ED%98%B8%EC%B6%9C.png)
![간접호출.png](img/%EA%B0%84%EC%A0%91%ED%98%B8%EC%B6%9C.png)
- Client 객체가 서버를 직접 호출하고 직접 결과를 받으면 직접 호출
- 대리자를 통해 요청을 하고 결과를 받으면 간접 호출
  - 이때 Client와 Server 사이에서 통신을 중재하는 대리자를 `Proxy`라 부름


### 프록시의 특징
![서버프록시의존관계.png](img/%EC%84%9C%EB%B2%84%ED%94%84%EB%A1%9D%EC%8B%9C%EC%9D%98%EC%A1%B4%EA%B4%80%EA%B3%84.png)
- `대체 가능`
  - 클라이언트가 서버에 요청한 것인지 프록시에 요청한 것인지 몰라야 함
  - 즉, 서버와 같은 인터페이스를 사용하는 객체만이 프록시가 가능함.
  - 때문에 Runtime에서 DI를 통해 Server를 Proxy로 대체해도 클라이언트는 변경 사실을 알 수 없게 됨
- `주요 기능`
  - 접근 제어
    - 인증/인가
    - 캐싱
    - 지연로딩
  - 부가 기능 추가

  
- `디자인 패턴`
  - 프록시 패턴 / 데코레이터 패턴 둘 다 프록시를 사용
  - 하지만 프록시를 사용한 `의도`에 따라 구분됨
    - 프록시 패턴: 접근 제어가 목적
    - 데코레이터 패턴: 부가 기능 추가가 목적

### 프록시 패턴 예제 (캐시 기능 추가)
![프록시예제1.png](img/%ED%94%84%EB%A1%9D%EC%8B%9C%EC%98%88%EC%A0%9C1.png)
```java
// interface
public interface Subject {
    String operation();
}

// 실 객체
@Slf4j
public class RealSubject implements Subject {
    @Override
    public String operation() {
        log.info("실제 객체 호출");
        sleep(1000);
        return "data";
    }

    private void sleep(int millis) {
        try {
            Thread.sleep(millis);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}


// 프록시 객체
@Slf4j
public class CacheProxy implements Subject {

    private Subject target;
    private String cacheValue;

    public CacheProxy(Subject target) {
        this.target = target;
    }

    @Override
    public String operation() {
        log.info("프록시 호출");
        if (cacheValue == null) {
            cacheValue = target.operation();
        }
        return cacheValue;
    }
}


// Client
public class ProxyPatternClient {

    private Subject subject;

    public ProxyPatternClient(Subject subject) {
        this.subject = subject;
    }

    public void execute() {
        subject.operation();
    }
}
```
- 런타임에 Client의 subject에 CacheProxy객체가 주입되면
- 값이 있으면 바로 값을 반환하고,
- 값이 없으면 RealSubject에 요청을 보내게 된다.


### 데코레이터 패턴 예제
- 프록시와 같은 방식으로 구현
- 단, 목적이 부가 기능 추가임
![데코예제1.png](img/%EB%8D%B0%EC%BD%94%EC%98%88%EC%A0%9C1.png)
- 데코레이터 패턴이든 프록시 패턴이든
- 프록시 객체가 여럿 생겨 체인을 만드는 경우가 있다.
  - 이때 프록시는 `항상 호출 대상을 가지고 있어아 한다`는 중복을 줄이기 위해
  - 프록시/데코레이터를 위한 추상 클래스를 만드는 것을 고려해볼 수 있다.