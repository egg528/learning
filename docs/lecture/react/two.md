 ---
title: JS 응용
sidebar_position: 1
---

## Truthy & Falsy
```javascript
let a = {};

if(a){
    console.log("TRUE")
}else{
    console.log("FALSE")
}
```
- 위 코드는 TRUE를 콘솔 창에 출력한다.
- JS는 boolean값이 아니라도 True로 인식하거나 False로 인식하는 것들이 있는데...
  - Truthy
    - {}
    - 숫자
    - 문자열
  - Falsy
    - null
    - undefined
    - 0, -0, NaN
    - ""
- 왜 필요할까?
  - undefined, null에 대한 예외 처리
  - 예를 들어 if(!객체)를 하면 Falsy들에 대한 예외처리가 한번에 됨.


## 비 구조화 할당
```javascript
let [variable1, variable2, variable3] = ["value1", "value2", "value3"]


// 아래 케이스에서 variable4는 undefined가 됨.
// 이때 = "" 형식으로 default값을 지정해줄 수 있다.
let [variable1, variable2, variable3, variable4] = ["value1", "value2", "value3"]


// 비구조화 할당 swap 활용
let a = 10;
let b = 20;

[a, b] = [b, a]


// 객체의 비 구조화 할당
let obj = {one: "one", two: "two.md"};

let {one, two} = obj; // oboj key값을 기준으로 할당
let {one: anotherName, two} = obj; // :변수명을 넣으면 key값이 아닌 다른 이름으로 변수 선언 가능
```


## spread 연산자(상속 개념)
```javascript
const cookie = {
    base: "cookie",
    madeIn: "korea"
}

const chcochipCookie = {
    ...cookie, // 쿠키 객체의 프로퍼티를 모두 가져온다.
  toping: "chocochip"
}
```
- 배열 간에도 사용이 가능하다.


## 동기 & 비동기