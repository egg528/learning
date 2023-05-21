---
title: React.js 기초
sidebar_position: 3
---
## React는 왜 필요할까?
1. Component화가 쉬워져 단일 책임 원칙에 보다 부합하는 코딩을 할 수 있다.
2. 선언형 프로그래밍으로 직관적인 코드 작성에 도움을 준다.
3. Virtual Dom

## JSX란?
- React의 Component를 만드는데 유용한 Package


## State
- State(상태)란 Component가 가지고 있는 값이 바뀔 수 있는 동적인 데이터이다.
  - 예를 들어 Github의 Dark Mode / Light Mode도 어떤 Component의 상태가 변화하는 것이라 볼 수 있음

## Props
- Component에 데이터를 전달하는 기본적인 방법
- Spread 연산자를 통해 여러 값을 한번에 전달 가능하고, 비구조화 할당을 통해 원하는 값만 받아서 사용할 수 있다.
- defaultProps 기능을 사용하면 전달 받을 데이터의 default값을 설정할 수 있음