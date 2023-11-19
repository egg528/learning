---
title: StopWatch
tag: [backend, spring, stopwatch]
---
## 글 링크
- [Spring StopWatch로 실행 속도 측정하기](https://sungminhong.github.io/spring/stop_watch/)
- [Custom Annotation, AOP, StopWatch를 활용한 시간 측정](https://jhkimmm.tistory.com/5)
- [Spring docs](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/util/StopWatch.html)
## 내용 정리
- 크게 2가지 방법으로 사용할 수 있다.
  - start():  출력하면 Task명이 없음.
  - start(String taskName): 출력하면 Task명이 있다.
- prettyPrint(): 모든 Task 결과를 Table 형식으로 출력해줌
  - ```text
        -----------------------------------------
        ms % Task name
        ----------------------------------------- 
        00017 040% Task1
        00025 060% Task2
    ```

### 생각 정리
- Annotation, Aop와 함께 사용하면 원하는 편리하게 로직 수행 시간을 구할 수 있을 것 같다.
  - 여러 모듈에서 사용할 것 같으니 멀티 모듈일 경우 위치는 Core가 좋을 것 같다.