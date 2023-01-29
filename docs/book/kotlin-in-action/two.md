---
title: 2. 코틀린 기초
sidebar_position: 2
---
## 함수와 변수
--- 

### - 함수
``` kotlin
(1)
fun max(a: Int, b: Int): Int = if(a > b) a else b;

(2)
fun max(a: Int, b: Int) = if(a > b) a else b;

(3) 반환 값 불가
fun max(a: Int, b: Int){
    return if(a > b) a else b;
}
```

- 코틀린에서 식이 본문인 함수는 반환 타입을 적지 않아도 된다.
  - 컴파일러가 타입을 추론해준다.
  - 식(expression)이란: 문(statement)과 구분되며 값을 만들어낸다.
    - 식 예시) if, when, try
    - 문 예시) {}

### - 변수
``` kotlin
(1)
var temp1 = 1;

(2)
var temp1: Int = 1;

(3) 변수 선언 불가
Int temp1 = 1;

(4) 변경 불가능한 변수
val finalValue = 1;
```
- 타입을 생략하거나 변수명 뒤에 명시할 수 있다.
- java의 final -> kotiln의 val
