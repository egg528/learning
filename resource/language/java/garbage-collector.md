---
title: garbage collector
tag: [backend, spring, cache]
---
## 1. Garbage Collector란?
- 동적으로 할당된 메모리 영역 중 사용하지 않는 영역을 탐지하여 해제하는 기능
- Heap 영역 (동적으로 할당된 메모리 영역)
  - 모든 Object 타입의 데이터가 할당되는 곳
  - Heap 영역의 Obeject를 가리키는 참조 변수가 Stack에 할당
- Stack 영역 (정적으로 할당된 메모리 영역)
  - 원시 타입의 데이터가 값과 함께 할당되는 곳.
  - Heap 영역에 생성된 Object 타입의 데이터의 참조값이 할당됨

```java
public class Main {
  public static void main(String[] args) {
    int num1 = 10; // Stack 영역
    String name = "우석"; // name은 Stack 영역, String: 우석은 Heap 영역
  }
}
```
- main 메서드가 끝나면 Stack영역은 모두 제거되고 Heap 영역에 String: 우석만 남게 된다.
- 이렇게 사용되지 않으면서 Heap 영역에 존재하는 데이터를 Unreachable Object라 부르고 Garbage Collector의 대상이 된다


## 2. Garbage Collector 동작 순서 (Mark And Sweep)
1. Garbage Collector가 Stack의 모든 변수를 스캔하면서 각각 어떤 객체를 참조하고 있는지 찾아서 마킹한다. (Mark)
2. Reachable Object가 참조하고 있는 객체도 찾아서 마킹한다. (Mark)
3. 마킹되지 않은 객체를 Heap에서 제거한다. (Sweep)


## 3. Garbage Collector가 동작하는 시점
![heap.jpg](img%2Fheap.jpg)
- Heap은 크게 New Generation / Old Generation 영역으로 나뉜다.
- New Generation은 Eden / Survival 0 / Survival 1로 나뉘는데
- 새로운 객체는 Eden 영역에 할당된다.
- Eden 영역이 가득차게 되면 GC가 발생하고 이때 GC를 `Minor GC`라 한다.
  - Minor GC에서 살아남은 객체들은 Survival 0로 옮겨진다.
- Survival 0가 가득차게 되면 이때도 동일하게 Minor GC가 동작한다.
  - 여기서 살아남은 객체들은 Survival 1로 옯겨지고 이동한 객체는 Age 값이 증가한다.
- 중요한 점은 Survival 0 -> Survival 1 이 순서대로만 진행되지는 않는다는 점이다.
  - Eden이 가득 차서 Minor GC가 일어나면 두 Survival 영역 중 객체가 존재하는 영역으로 객체가 옮겨간다.
  - 즉, Survival 영역 둘 중 한 곳은 항상 비어있다.
- 객체들이 지속적으로 살아남아 Survival을 옮겨다니면 Age값이 계속 증가할 것이다.
- 이때 특정 값을 넘어가면 Old Generation으로 옮겨지는데 이 과정을 `Promotion`이라 한다
- Old Generation이 가득차면 `Major GC`가 발생한다.


## 4. Garbage Collector 종류
### (1) Serial GC
- GC를 처리하는 스레드가 1개이다.
- Mark-Compact Collection 알고리즘을 사용한다.

### (2) Parallel GC
- 여러 스레드로 GC를 처리한다.
- 빠르고, Core 개수가 여럿일 때 사용하면 좋다.


### (3) Stop-The-World
- GC를 실행하기 위해 JVM이 APP 실행을 멈춘다.
- stop-the-world가 발생하면 GC를 처리하는 스레드 외에는 모두 작업을 멈추고 GC 작업이 끝나면 다시 시작한다.

### (4) Copncurrent Mark Sweep GC
- stop-the-world 시간이 짧다
  - stop-the-world를 짧게 나눠서 가져가며 한번 멈췄을 때 mark, sweep 둘 중 한 작업만 수행한다.
  - mark -> 응답 -> sweep -> 응답
- 응답 시간이 빨라야 할 때 사용하면 좋다.
- CPU를 더 많이 사용한다 (GC 사이클이 길다 mark -> 응답이 GC 사이클에 추가됨 -> sweep)
- Compaction을 사용하지 않는다.


### (5) G1 GC
- 각 영역을 Region으로 더 잘게 나눈다.
- GC가 일어날 때 전체 영역을 탐색하지 않는다.
- 잘게 쪼갠 Region영역이 꽉 차면 GC를 실행한다
- 영역이 작기 때문에 STW 시간이 짧다.
- Compacttion을 사용한다

## Reference
- [던의 JVM의 Garbage Collector](https://www.youtube.com/watch?v=vZRmCbl871I&t=35s&ab_channel=%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC)
