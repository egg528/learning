---
title: 코틀린 기초
sidebar_position: 1
---


## 01. 변수
``` kotlin
var global:String = "top level variable"

fun main(){
    var a: Int = 1;

    // 값을 바탕으로 타입 추론
    var b = 2;

    // 지연 초기화는 타입 명시해줘야 한다.
    var c: Int;
    c = 33;

    // val는 변하지 않는 값, java의 final
    val d = 1;
    val e: Int = 1;

    // 변수 타입 변경은 불가능
    var f = 1;
    // f = "타입 변경 시도 (Int -> String)"

    // 메서드 외부 혹은 top level에 선언된 변수는 사용 가능
    println(global)
}
```


## 02. 함수
--- 
```kotlin
// 기본적인 함수 선언 스타일
fun sum(a: Int, b: Int) : Int{
    return a + b
}


// 표현식 스타일
fun sum2(a: Int, b:Int) : Int = a + b

// 표현식 & 반환타입 생략
fun sum3(a: Int, b: Int) = a + b

// 블록(함수 로직 단위 - '{}')이 있는 함수는 반환 타입 생략 불가
/**
 * fun sum(a: Int, b: Int){
 *     return a + b
 * }
 */


// 반환 타입이 없으면 Unit을 반환
fun printString(a: String, b: String) {
    println(a + b)
}
```

### Default Parameter와 Named Argument
```kotlin
// 디폴트 파라미터
// 매개변수에 다른 문자열 넣으면 입력 값으로 변수 초기화됨
fun printHelloWorld(message: String = "Hello World"){
    println(message)
}

// Named Argument
// 매개변수명를 지정할 수 있다.
fun log(level: String = "DEBUG", message: String){
    println("[$level] $message")
}

fun main(){
    log(message = "로그 출력")
    log(level = "INFO", "로그출력")
    
    // 매개변수 순서 바뀌어도 가능
    log(message = "로그 출력", level = "INFO")
}
```
- Named Argument를 활용하면 메서드를 사용할 때 변수 혼동을 줄일 수 있을 것 같다.