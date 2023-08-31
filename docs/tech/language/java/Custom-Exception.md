---
title: Custom Exception
tag: [java, datasource]
---
## 글 링크
- [Java Exception 생성 비용은 비싸다.](https://meetup.nhncloud.com/posts/47)
## 내용 정리
### 문제 상황
- 예외 발생 경로 trace가 성능에 큰 영향을 미친다.
### 해결 방안
- fillInStackTrace 메서드를 Overriding한다.
- Custom Exception의 경우 비즈니스 로직을 벗어나서 발생한 경우가 많기 때문에 