---
title: 1. 쓰레드 로컬 - ThreadLocal
sidebar_position: 1
---

# 1. 필드 동기화
---

## 섹션 1 코드
```java
// Controller 단
@GetMapping("/v2/request")
public String request(String itemId) {

  TraceStatus status = null;
  try {
    status = trace.begin("OrderController.request()");
    orderService.orderItem(status.getTraceId(), itemId);
    trace.end(status);
    return "ok";
  } catch (Exception e) {
    trace.exception(status, e);
    throw e;//예외를 꼭 다시 던져주어야 한다.
  }
}


// Service 단
public void orderItem(TraceId traceId, String itemId) {

  TraceStatus status = null;
  try {
    status = trace.beginSync(traceId, "OrderService.orderItem()");
    orderRepository.save(status.getTraceId(), itemId);
    trace.end(status);
  } catch (Exception e) {
    trace.exception(status, e);
    throw e;
  }

}

// Repository 단
public void save(TraceId traceId, String itemId) {

  TraceStatus status = null;
  try {
    status = trace.beginSync(traceId, "OrderRepository.save()");

    //저장 로직
    if (itemId.equals("ex")) {
      throw new IllegalStateException("예외 발생!");
    }
    sleep(1000);

    trace.end(status);
  } catch (Exception e) {
    trace.exception(status, e);
    throw e;
  }
}
```
- 이전 방식을 확인해보면, Controller <-> Service <-> Repository를 오가며 TraceId를 Parameter로 전달하여 필드를 동기화했다.
  - 문제점: 모든 메서드 Parameter로 TraceId를 받아야 함.


## 해결책: Trace용 싱글톤 객체 생성
```java

@Slf4j
public class FieldLogTrace implements LogTrace {

    private static final String START_PREFIX = "-->";
    private static final String COMPLETE_PREFIX = "<--";
    private static final String EX_PREFIX = "<X-";

    private TraceId traceIdHolder; //traceId 동기화, 동시성 이슈 발생

    @Override
    public TraceStatus begin(String message) {
        ...
    }

    // 같은 요청에 대해 TraceId를 동기화하는 과정 (depth +)
    private void syncTraceId() {
        if (traceIdHolder == null) {
            traceIdHolder = new TraceId();
        } else {
            traceIdHolder = traceIdHolder.createNextId();
        }
    }
    
    // 같은 요청에 대해 TraceId를 동기화하는 과정(depth -)
    private void releaseTraceId() {
        if (traceIdHolder.isFirstLevel()) {
            traceIdHolder = null; //destroy
        } else {
            traceIdHolder = traceIdHolder.createPreviousId();
        }
    }

    @Override
    public void end(TraceStatus status) {
        ...
    }

    @Override
    public void exception(TraceStatus status, Exception e) {
        ...
    }

    private void complete(TraceStatus status, Exception e) {
        ...
    }

    private static String addSpace(String prefix, int level) {
        ...
    }

}
```
- 로그 추적을 위한 객체를 생성하여 해당 객체에서 TraceId를 가진다.
  - 하지만 FieldLogTrace를 사용하면 동시성 문제가 발생한다.
  - 해당 객체는 Scope가 싱글톤인데, 요청이 동시에 여럿일 때 각 TraceId를 보관하지 못한다.
  - `즉, 동시성 문제가 발생한다.`
  - 참고: 
    - 지역 변수는 메서드가 실행될 떄 각기 다른 메모리를 할당 받아 동시성 문제가 발생하지 않는다.
    - 읽기 작업만 할 경우 발생하지 않음.

### 동시성 문제 해결책: ThreadLocal
- 관련 글: https://dev.gmarket.com/62
- 쓰레드 별로 생성되는 보관소 (Thread 정보를 Key값으로 하여 값을 저장하는 Map 구조)

```java
private ThreadLocal<TraceId> traceIdHolder = new ThreadLocal<>();
```
- FieldLogTrace객체에서 문제가 된 필드를 ThreadLocal로 두고
- get, set 메서드를 활용해 TraceId를 동기화하면 동시성 문제가 발생되지 않음.
- 주의 사항
  - 요청이 끝날 때 값을 꼭 remove 해줄 것
  - ThreadPool 환경에서 Thread가 제거되지 않기에, ThreadLocal에도 값이 남아있게 된다.
  - Web 환경에서 다른 유저의 정보를 제공해줄 수도..

