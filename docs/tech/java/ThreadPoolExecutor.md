---
title: Java의 실행원리 Deep Dive
tag: [java]
---
## 글 링크
- [newFixedThreadPool 는 어떻게 동작하는가?](https://hamait.tistory.com/937)
- [ThreadPoolExecutor에 대한 오해와 진실](https://leeyh0216.github.io/posts/truth_of_threadpoolexecutor/)
## 내용 정리
### newFixedThreadPool 동작 원리
1. corePoolSize만큼 Thread 생성
2. Thread가 부족하면 Runnable을 Queue에 담는다
3. Queue가 가득 차면 maximumPoolSize까지 Thread를 추가 생성한다.