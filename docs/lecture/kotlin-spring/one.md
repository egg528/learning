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


## 03. 흐름제어
### if ... else ...
```kotlin
var str = if(age > 20){
    "성인"
}else{
    "노인"
}


var temp = if (a > b) true else false
```
- 코틀린의 if ... else는 표현식으로 값을 return할 수 있다.
- 때문에 3항 연산자가 필요 없다. (존재하지도 않음)

### when (java의 switch)
```kotlin
val day = 2

val result = when(day){
    1 -> "월요일"
    2 -> "화요일"
    3 -> "수요일"
    4, 5 -> "목요일"
    else -> "error"
}
```
- java와 다르게 break 필요 없음
- else 없어도 작성 가능하다.
- 여러 조건을 한 줄에 넣을 수 있다.

### for문
```kotlin
// 범위 연산자 .. 사용 (0 <= i <=3)
for(i in 0..3){
    print(i)
}


// step 사용: 증가 간격 변경 i += 2
for(i in 0 .. 10 step 2){
    print(i)
}


// downTo 사용: 감소 간격 변경 i -= 1  
for(i in 3 downTo 1){
    print(i)
}


// 배열 사용 가능
for (i in 배열){

}
```

### while문
```kotlin
var x = 6;

while(0 < x){
    print(x);
    x--;
}
```
- java와 동일 



## Null 안정성
- 코틀린에서는 널 가능성을 컴파일러가 미리 감지해서 NPE 가능성을 줄일 수 있음

```kotlin
// 컴파일 오류가 발생함.
var a : String = null


// nullable한 타입 따로 제공한다. [?]
var a : String? = null
    // a.length -> nullable한 타입이기에 컴파일 오류가 발생한다.
    // a?.length -> 정상적으로 사용 가능, 출력시 null 출력
  
// 엘비스 연산자: a?.length가 널이면 0 아니면 a?.length
var c = a?.length ?: 0 

// 단언 연산자
val c: String? = null
// c!!.length -> null이 발생하지 않음을 개발자가 보장하는 것

```


## Exception
- CheckedException을 강제하지 않는다 -> try-ca tch문을 강제하지 않음
- try-catch문은 표현식임 -> 값 전달 가능
- throw도 표현식이기 -> 값 전달 가능
  - Nothing 타입임


```kotlin
val b: String? = null
val c = b ?: thorw Exception("에러");
```
- 위 코드에서 c는 Not Null 타입임
- 컴파일러가 null일 경우 예외 처리하는 부분까지 고려함


## 클래스와 프로퍼티
```kotlin
// 내용 없는 클래스
class EmptyClass


// constructor (생략 가능)
// 어노테이션을 쓰는 경우가 아니면 생략하는 편 (어노테이션을 쓰는 경우는 언제?)
// 후행 컴마 가능
class Coffee constructor(val name:String){
}
class Coffee constructor(
                val name:String,
                var age: Int = 0,
){
}
```
- 클래스에서 var로 생성된 필드는 Getter, Setter를 자동으로 생성해준다.
  - 변수에 값을 할당하거나 변수를 이용할 때 자동으로 Getter, Setter
- `field`: get, set에서 변수에 접근하는 식별자임
  - 코틀린에서 변수 이름을 통한 접근은 get(), set()을 이용하기 때문에 custom get, set에서 변수명을 사용하면 무한 재귀에 빠짐
- 자동으로 get, set을 만들고 활용하기 때문에 상태에 접근할 때 메서드를 사용하지 않는 것 같아 보임(get, set을 따로 쓰지 않아도 돼서)
  - 상태:프로퍼티 / 행위:메서드 측면에서 객체지향적이라 할 수 있음



## 상속
- 코틀린 내 모든 클래스의 조상은 Any
  - equals()
  - hashCode()
  - toString()


```kotlin
open class Dog{
     open var age: Int = 0

    open fun bark(){
        println("멍멍")
    }
}

class Bulldog : Dog() {
    override var age: Int = 0

    override fun bark() {
        println("왁왁")
    }
}
```
- 코틀린은 기본적으로 final class
- 필요한 경우 open 키워드를 통해 상속 가능한 class 생성 가능
  - 메서드, 프로퍼티의 경우도 open 키워드 있는 것만 상속
- 상속받은 하위 클래스가 override한 메서드 혹은 프로퍼티는 자동으로 open 상태가 됨
  - 이런 상황을 막고 싶으면 ovveride할 때 final 키워드 사용 
- `super`: 하위 클래스에서 상위 클래스의 메서드나 프로퍼티에 접근할 때

```kotlin
abstract class Developer(){
    abstract var age: Int
    abstract fun code(language: String)
}

class BackendDeveloper:Developer(){
    override var age: Int = 0

    override fun code(language: String) {

    }
}
```
- `abstract`: 추상 클래스, 메서드, 프로퍼티를 위한 키워드




## 인터페이스
```kotlin
interface Cart{

    var coin: Int

    fun add(product: Product)

    // 구현은 없지만 몸통은 있는 default 메서드도 가능
    fun rent(){
    }
}

interface Order{
    fun add(product: Product){
        println("주문 완료")
    }
}

class MyCart(override var coin: Int) : Cart, Order{
    override fun add(product: Product) {
        println("카트에 담기 완료")

        // super 키워드로 특정 인터페이스에 접근하여 메서드 사용 가능
        super<Order>.add(product)
    }
}
     
```
- 추상 메서드와 구현을 가진 메서드 모두 정의 가능
- 상속과 다른 점은 `()` 생성자 파트가 없음
- 프로퍼티도 가질 수 있음
  - 단 get, set custom 시 `field` 사용 못함
- 상위 인터페이스를 가질 수 있음
- 다중 상속 가능
  - 여러 인터페이스에 같은 이름의 메서드가 있다면 


## 열거형 클래스 Enum
```kotlin
enum class PaymentStatus(val label: String){
    UNPAID("미지급"){ override fun isPayable() = true },
    PAID("지급완료"){ override fun isPayable() = false },
    FAILED("지급실패"){ override fun isPayable() = false },
    REFUNDED("환불"){ override fun isPayable() = false },;

    abstract fun isPayable(): Boolean
}


fun main(){
    if(PaymentStatus.UNPAID.isPayable()){
        println("결제 가능 상태")
    }
}

// 인터페이스로 사용도 가능 
interface Payable{
    fun isPayable(): Boolean
}

enum class PaymentStatus(val label: String):Payable{
    UNPAID("미지급"){ override fun isPayable() = true },
    PAID("지급완료"){ override fun isPayable() = false },
    FAILED("지급실패"){ override fun isPayable() = false },
    REFUNDED("환불"){ override fun isPayable() = false };
}

// valueOf() -> String값 바탕으로 Enum값 반환
PaymentStatus.valueOf("PAID")

// values() -> 상수 리스트
PaymentStatus.values()

// ordinal과 name
ordinal은 순서 출력
name은 상수 String으로 출력
```
- 생성자, 메서드, 프로퍼티를 설정할 수 있다.