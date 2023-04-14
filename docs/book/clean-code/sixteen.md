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