---
title: JS 기초
sidebar_position: 1
---

## 변수
``` javascript
/**
* let, var, const를 사용해서 변수를 저장할 수 있음
* 차이점
* let은 변수 중복 생성이 불가능
* var는 가능
* const는 값 변경 불가 (read-only)
*/ 

let age1 = 27;
var age2 = 27;
const age3 = 27;


let age1 = 28; (X)
var age2 = 28; (O)

age3 = 28 (X)
```


## 자료형

![사진1](./img/type.png)
- JS의 null
  - JS에서 null은 의도적으로 넣은 값이다.
  - 값이 할당되지 않은 변수는 `undefined`

## 연산자
```javascript
var temp = 1 == "1"; // true, 값만 비교 (!=)
var temp = 1 === "1"; // flase, type도 비교(!==)
```

## 함수 표현식
```javascript
// (1) 함수 선언식 
// 선언식으로 만들어진 함수들은 프로그램 실행 전 최상단으로 올라간다고 생각하면 됨 (hoisting)
function method(param1, param2){
    return "return";
}

// (2-1) 함수 표현식
let method = function(param1, param2){
    return "return";
}

// (2-2) 함수 표현식
let method = (param1, param2) => "return";
let method = (param1, param2) => {
    return "return";
}
```

## 객체
```javascript
// 객체 선언 방식
// const로 선언해도 내부 변경 가능. 객체가 변하는 게 아니기 때문.
let person = {
    name: "권우석",
    age: 28,
    sayAge: function () {
        console.log(this.age);
    }
};

// 외부에서 속성 추가 가능
person["gender"] = male;

// 없는 속성 접근 시 undefined
console.log(person.hobby);

// 프로퍼티가 존재하는지 확인하는 연산이 존재함. -> in 연산 사용하면 존재 여부 trun false 반환
console.log(`${"name" in person}`)
```

## 배열
```javascript
// 한 배열에 다양한 자료형이 들어갈 수 있음
let arr = [1, "element", true]

// 1. forEach
arr = [1, 2, 3, 4]
arr.forEach((elm) => console.log(elm))

        
// 2. map: 연산 수행하여 새로운 배열 반환
let arr2 = arr.map((elm) => {
    return elm * 2
});


// 3. filter: 원하는 요소만 새로운 배열에 넣어 반환
let arr3 = arr.filter((elm) => elm%3 === 0)


// 4. slice, concat: 배열 자르기 / 합치기
arr1.slice(0, 1)
arr1.concat(arr2)


// 5. sort: 정렬
arr.sort()

// 직접 비교 조건을 작성해서 정렬할 수도

const compare = (a, b) => {
    
    if(a > b){
      
      // 1은 두 요소 위치를 바꿔라
      return 1;
    }
    
    if(a < b){
        
      // -1은 두 요소를 가만히 둬라
      return -1;
    }
    
    if(a == b){
        
        // 0은 두 요소를 가만히 둬라
        return 0
    }
}
```