---
title: fetch vs pull
sidebar_position: 1
---
## 글 링크
- [Pull vs Fetch](https://www.freecodecamp.org/korean/news/git-fetch-vs-pull/)
## 내용 정리
#### 공통점
- remote 저장소의 변경 사항을 가져와 local 저장소를 최신 상태로 유지해준다.

#### Fetch
- remote 저장소의 변경 내용을 가져오기만 한다. 
- 즉, 변경된 커밋을 가져오기만 한다.
- 변경 사항을 local로 가져오기 전 변경 내용을 확인할 때 사용

#### Pull
- 변경내용을 가져오고 local 저장소에 병함한다.

#### 사용법
- fetch로 변경 내용을 확인하고
- local에서 변경 내용을 병합하면 불필요한 충돌을 줄일 수 있다.