---
title: Socket Mode
sidebar_position: 1
---
## 글 링크
- [Socket Mode Intro](https://api.slack.com/apis/connections/socket)
- [Getting Started with Bolt](https://slack.dev/java-slack-sdk/guides/getting-started-with-bolt-socket-mode)

## Socket Mode
- 현재 회사 내부 개발망에서는 public endpoint가 제공되지 않음.
- 사용할 서버가 public endpoint를 사용할 수 없을 경우 대안이 됨.
  - [WebSocket Protocol](https://www.rfc-editor.org/rfc/rfc6455)
  - Slack Socket은 위 protocol을 이용한다.