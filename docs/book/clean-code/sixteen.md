---
title: CompletableFuture - 안정적 비동기 프로그래밍
sidebar_position: 16
---
## 1. Future의 단순 활용
### Future란?
```java
public class Test {

    private static long TWO_SEC = 2000;
    private static long FIVE_SEC = 5000;

    public static void main(String[] args) throws InterruptedException {
        ExecutorService executor = Executors.newCachedThreadPool();

        // 시간이 오래 걸리는 로직 다른 스레드에서 비동기로 실행
        Future<Integer> future = executor.submit(new Callable<Integer>(){
            @Override
            public Integer call() throws Exception {
                Thread.sleep(TWO_SEC);
                return 1;
            }
        });

        //
        Thread.sleep(FIVE_SEC);
        Integer result = 5;

        try {
            // 비동기 작업 반환 값 가져오기
            // Main Thread가 영원히 block되지 않도록 Timeout은 설정하는 것이 좋다...
            result += future.get(2, TimeUnit.SECONDS);
        } catch (ExecutionException ee) {
            System.out.println(ee);
        } catch (InterruptedException ie) {
            System.out.println(ie);
        } catch (TimeoutException te)  {
            System.out.println(te);
        } catch (Exception ex) {
            System.out.println(ex);
        }


        System.out.println(result);
        // 6이 출력

        return;
    }
}
```
- 미래 어느 시점에 결과를 얻는 모델 
- 작업을 설정하고 Thread를 할당해주면 비동기로 작업이 수행된다.
- 이후 원하는 시점에 get()을 통해 결과 값을 받아올 수 있다.

### Future의 한계
- Future는 아래와 같은 상황을 간결하게 구현하기에 무리가 있다.
  - Future A의 결과를 Future B로 전달
  - Future A 결과와 Future B의 결과 조합

### 동기 / 비동기 API
- 동기 API
  - 메서드 호출 이후 반환을 기다리고, 값을 받은 후 다음 메서드가 수행된다. (다른 Thread를 이용했더라도 순서가 유지됨)
  - 이를 블록 호출이라고 한다.
- 비동기 API
  - 메서드가 즉시 반환되며, 끝내지 못한 나머지 작업을 다른 스레드에 할당한다
  - 나머지 작업은 콜백 메서드를 호출해서 전달하거나, 호출자가 계산 결과를 기다리는 메서드를 추가로 호출하여 전달된다.
  - 이를 비블록 호출이라고 한다

### 비동기 API 구현 (예시를 통한 설명)
```java
public class Shop {
    public double getPrice(String product) {
        return calculatePrice(product);
    }

    private double calculatePrice(String product) {
        delay();
        return new Random().nextDouble() * product.charAt(0) + product.charAt(1);
    }

    private void delay() {
        try {
            Thread.sleep(1000L);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
```
- getPrice를 통해 가격을 구하는 메서드를 비동기로 만들 예정
- 계산을 구현하기 어려우니 sleep()으로 대체...

#### 1. 동기 메서드를 비동기 메서드로 변환
```java
public Future<Double> getPriceAsync(String product) {
    CompletableFuture<Double> futurePrice = new CompletableFuture<>();

    new Thread( () -> {
        double price = calculatePrice(product);
        futurePrice.complete(price);
    }).start();

    return futurePrice; // 계산 완료를 기다리지 않고 Future 반환
}
```
1. 비동기 메서드로 변환하기 위해서 메서드 명부터 바꿔야 한다. getPrice -> getPriceAsync
2. 반환값도 바꿔야 한다. double -> Future<Double>
   - Future는 결과값의 핸들일 뿐
   - 계산이 완료되면 get()을 통해 결과를 얻을 수 있다.

#### 2. 비동기 에러 처리 방법
- 가격을 계산하다가(calculatePrice) 에러가 발생하면 해당 Thread에만 영향을 미친다.
- 즉, Client는 get 메서드 반환을 영원히 기다릴 수도 있다.
- 해결책
  - get 메서드에 Timeout 설정
  - completeExceptionally()를 이용해 발생 예외를 Client에 전달
```java
  public Future<Double> getPriceAsyncWithError(String product) {
        CompletableFuture<Double> futurePrice = new CompletableFuture<>();

        new Thread( () -> {
            try {
                double price = calculatePrice(product);
                futurePrice.complete(price);
            } catch(Exception ex) {
                futurePrice.completeExceptionally(ex);
            }
        }).start();

        return futurePrice;
    }
```
