---
title: browser rendering
tag: [frontend, browser rendering]
---
## 브라우저 렌더리 과정 이해하기
### 브라우저의 역할
- 유저가 선택한 자원을 서버에서 받아와 보여준다.

### 브라우저 렌더링 동작 과정
```
1. HTML 파일과 CSS 파일을 파싱해서 각각 Tree를 만든다. (Parsing)
2. 두 Tree를 결합하여 Rendering Tree를 만든다. (Style)
3. Rendering Tree에서 각 노드의 위치와 크기를 계산한다. (Layout)
4. 계산된 값을 이용해 각 노드를 화면상의 실제 픽셀로 변환하고, 레이어를 만든다. (Paint)
5. 레이어를 합성하여 실제 화면에 나타낸다. (Composite)
```

## Reference
- [브라우저 렌더리 과정 이해하기](https://tecoble.techcourse.co.kr/post/2021-10-24-browser-rendering/)