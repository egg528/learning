---
title: SLF4J 이해하기
tag: [SLF4J, Log]
---
## 글 링크
- [SLF4J 이해하기 1탄](https://velog.io/@mindfulness_22/slf4j-facade-pattern-1)
- [SLF4J 이해하기 2탄](https://velog.io/@mindfulness_22/slf4j-logging-2)
- [SLF4J 이해하기 3탄](https://velog.io/@mindfulness_22/slf4j-slf4j-logback-3)

## 내용 정리
- System.out.println()은 안 되나요?
  - 충분한 정보를 담고 있지 않다. (로그 레벨이 없다..)
  - synchronized를 사용함 (Thread Block)
  - Logging

- Logback의 로그 레벨 5단계
  - Error : 예상치 못한 심각한 문제일 경우. 즉시 조치가 필요한 레벨. 
  - Warn : 에러는 아님. 당장의 서비스 운영에는 영향이 없으나, 주의가 필요. 
  - Info : 운영에 참고할만한 사항. 
  - Debug : 개발 단계에서 사용. 일반 정보를 상세하게 나타낼 때 사용. 
  - Trace : 경로 추적을 위해 사용. 개발 단계에서 사용.

- SLF4J
  - Logging Framework의 추상화 역할
  - 사용하기 위해서는 구현체가 필요함