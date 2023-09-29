---
title: 2장 타입 스크립트의 타입 시스템  (Item 6 ~ 18)
sidebar_position: 2
---

## Item 6: 편집기를 사용하여 타입 시스템 탐색하기
### 코드 위치에 따라 타입이 어떻게 추론되는지 파악해볼 것
![if_type_change](img/if_type_change.jpg)
- 조건문 내부와 외부에서 defaultTextFunc는 다른 타입을 가진다.
- 편집기에서는 미리 타입스크립트가 코드 위치에 따라 변수의 타입을 어떻게 추론하는지 알 수 있다.
- 이를 통해 타입 스크립트의 타입 추론 방식에 익숙해질 수 있다.
- 연산자 체인 중간의 추론된 제네릭 타입을 알고 싶다면 연산자의 예상 반환값을 확인해보면 된다.

### 정의로 이동하여 타입 스크립트에 포함된 타입 선언들을 확인할 것
- 타입 선언 파일을 찾아보다보면 타입스크립트가 동작을 어떻게 모델링하는지 알 수있다.

### 내 생각 정리
- 이번 Item은 편집기를 이용해 타입 스크립트와 가까워지는 방법을 말해준다.
- 개발을 하면서도 한번씩 타입이 어떻게 추론되었는지 확인해보는 습관을 가지면 좋을 것 같다.
- 또한 항상 정의로 이동하여 정의된 타입을 확인하는 습관을 가져보자.

## Item 7: 타입이 값들의 집합이라고 생각하기
```typescript
interface Identified {
    id: string
}
```
- Java에서 어떤 객체가 Identified 타입으로 할당되기 위해서는 Identified를 implements한 객체를 생성해야 한다.
- 하지만 타입스크립트에서 한 객체가 string으로 할당된 id속성을 가지면 모두 Identified가 될 수 있다.
- 이는 타입 스크립트에서 타입을 상속의 개념보다는 집합의 개념으로 봐야하는 이유이다.
- 타입 체크 기능을 집합이 다른 집합의 부분 집합인지 검사하는 기능으로 이해해도 좋다. (책에서 권장하고 개념도 맞아 떨어짐)

### Unit(Literal)과 Union
```typescript
type A = 'A' // A타입은 'A'만을 가질 수 있는 unit 타입이다.
type B = 'B' // B타입은 'B'만을 가질 수 있는 unit 타입이다.

type AB = A | B // AB타입은 'A' 또는 'B'를 가질 수 있는 Union 타입이다.
```
- Unit과 Union 타입은 집합 관계로 이해하기 명확하다.
- Unit은 원소이고 Union은 합집합을 뜻한다.
- 때문에 A, B의 합집합인 AB에는 A, B가 모두 포함되니 할당도 가능하다.

### Intersection
```typescript
interface Person {
    name: string
}

interface Lifespan {
    birth: Date;
    death?: Date;
}

type PersonSpan = Person & Lifespan
```
- Intersaction(&)은 교집합을 뜻한다.
- 즉, Person의 속성과 Lifespan의 속성을 모두 가진 객체는 PersonSpan 타입으로 할당이 가능하다.
- 당연히 더 많은 속성을 가져도 할당은 가능하다.

### keyof (예외)
```typescript
type Key1 = keyof(Person | Lifespan) // = (keyof A) & (keyof B) = never
type Key2 = keyof(Person & Lifespan) // = (keyof A) | (keyof B) = 'name' | 'birth' | 'death'
```
- 여기서 생각이 조금 꼬인다.
- 주석의 등식처럼 생각하는 것이 조금 더 낫다.

### extends 키워드
```typescript
interface Person {
    name: string
}

interface PersonSpan extends Person {
    birth: Date;
    death?: Date;
}
```
- extends 또한 잡힙 관계로 이해할 수 있다.
- 즉, PersonSpan은 Person의 부분 집합으로 이해하면 명료해 보인다.

```typescript
function getKey<K extends string>(val: any, key: K) {
    // ...
}
```
- extends는 제네릭 타입에서 한정자로도 쓰이는데, 이때도 똑같이 이해할 수 있다.
- K는 string의 부분 집합이어야 한다. (상속 개념으로 이해하면 이상하단 걸 바로 느낄 수 있음)

### 배열과 튜플
```typescript
const list = [1, 2]; // 타입은 number[]
const tuple: [number, number] = list // 오류 발생
```
- [number, number]는 number[]의 부분집합이지만 반대는 성립하지 않는다.
- 때문에 오류가 발생했고 타입을 현재 list와 tuple 반대로 가져간다면 오류는 발생하지 않는다.

```typescript
const triple: [number, number, number] = [1, 2, 3]; 
const double: [number, number] = triple // 오류 발생
```
- 이 경우 타입을 반대로 가져가도 성립하지 않는다.
- 튜플의 경우 타입 스크립트는 배열의 length를 기준으로 타입을 구별한다.


### 타입이 되지 못하는 값이 있다는 것을 기억해야 한다.
```typescript
type T = Exclude<string|Date. string|number> // T: Date
type nonZeroNumber = Exclude<number, 0> // nonZeroNumber: number
```
- 예를 들어 0을 제외한 numbers type을 구현할 수 없기 때문에 이를 강제할 방법이 없다.
- Exclude를 생각할 수 있지만 Exclude는 타입 스크립트 type일 경우에만 유효하다

### 내 생각 정리
- 구조적 타이핑이라는 특성을 고려했을 때 타입 스크립트의 타입 시스템은 상속, 할당 가능성 보다는 집합의 개념으로 이해하고 적용하는 게 적절할 것 같다.


## Item 8: 타입 공간과 값 공간의 심벌(식별자) 구분하기
```typescript
type Symbol1 = number
const Symbol2 = 2;
```
- Item 8에서 나오는 심벌은 식별자를 뜻하며 class, type, interface, const, let 뒤에 나오는 명을 나타낸다.

### 타입 공간과 값 공간
```typescript
interface T1 {
    attribute: string;
}

type T2 = {
    attribute: string;
}

const V1 = 1;

const V2: {attribute: string} = {attribute: 'value'}; // {attribute: string}은 타입 공간에 존재하는 반면 V2, {attribute: 'value'}는 값 공간에 존재하는 것이다.

```
- 위 코드 중 T1, T2는 타입 공간에, V1은 값 공간에 존재한다.
- 둘을 쉽게 구분하는 방법은 컴파일 이후 코드를 생각해보면 된다.
- 컴파일 과정에서 타입 공간의 코드들은 모두 제거되기 때문에 이후에도 존재하는 심볼은 값, 사라진 심볼은 타입으로 이해할 수 있다.


### typeof 메서드
```typescript
const person: {name: string} = {name: 'woosuk'};

type P1 = typeof person; // {name: string}

const P2 = typeof person; // object
```
- typeof는 값 공간과 타입 공간에서 다르게 동작한다.
- 타입 공간에서는 타입 스크립트 타입을 반환하는 반면 값 공간에서는 자바스크립트 런타임의 typeof 연산자가 된다.
- 자바스크립트 런타임 타입
  - string
  - number
  - boolean
  - undefined
  - object
  - function

### class와 typeof
```typescript
class Person {
    name: string;
}

const V1 = typeof Person; // V1 = 'function'

type T1 = typeof Person; // T1 - typeof Person, same as t

const person: T1 = {name: 'woosuk'} // 오류 발생, T1 = typeof Person
```
- 자바스크립트에서 class는 함수로 구현되기 때문에 값 공간에서 typeof Person은 'function'을 반환한다.
- 이해가 어려웠던 건 타입 공간에서 class의 typeof파트이다.
- Person을 반환할 것 같았지만 결과는 typeof Person을 반환한다.
- Person은 인스턴스가 아니라 new 키워드를 사용할 때 볼 수 있는 생성자 함수이다.
- 때문에 Person을 반환할 것 같지만 T1은 typeof Person이 설정된다.

```typescript
const person: Person = {name: 'woosuk'};

type T2 = typeof person;

type T3 = InstanceType<typeof Person>;
```
- typeof person은 인스턴스의 타입이기 때문에 쉽게 예상할 수 있는 반환값인 Person 타입을 반환한다.
- InstanceType을 활용하면 인스턴스를 생성하지 않고도 Person 클래스의 인스턴스 타입을 반환 받을 수 있다.



### 속성 접근자와 타입
```typescript
class Person {
  name: string;

  constructor(name: string) {
    this.name = name
  }
}

const person: Person = {name: 'woosuk'}

const personName: Person['name'] = person['name'];
console.log(personName) // 'woosuk'

const personName1: Person['name'] = person.name;
console.log(personName) // 'woosuk'

const personName2: Person.name = person.name; // 오류, Person.name 방식으로는 속성의 type에 접근 불가능
```
- 객체 속성에 접근하는 방식은 `.속성명` 또는 `[속성명]`
- 하지만 타입 속성(의 타입)에 접근할 때는 `[속성명]` 방식만 사용 가능하다.

### 구조 분해 할당에서 값과 타입 실수
```typescript
// (1) 기본 코드. option 객체를 매개변수로 받고 있었다.
function email(option: {person: Person, subject: string, body: string}) {
    
}

// (2) JS였다면 아래와 같이 구조 분해 할당이 가능하다.
function email({person, subject, body}) {

}

// (3) 하지만 TS에서 아래와 같이 구조 분해 할당을 받으려 하면 오류가 발생한다.
//     이유는 Person과 string을 값의 관점에서 해석되기 때문이다.
//     {person: Person, subject: string, body: string}을 값 객체로 인식해버림
function email({person: Person, subject: string, body: string}) {

}


// (4) TS에서 구조 분해 할당을 적용하려면 아래 코드처럼
function email({person, subject, body}:{person: Person, subject: string, body: string}) {

}
```


### 내 생각 정리
- 타입 스크립트 컴파일러의 기능 중 컴파일과 타입 체크 기능은 독립적으로 수행된다는 부분이 생각난다.
- 타입 공간은 컴파일과는 상관 없고 컴파일 결과물에서도 제거된다.
- 타입 스크립트의 이 원리의 연장선이라는 느낌이 든다. 값 공간은 컴파일과 관련된 영역, 타입 공간은 타입 체크와 관련된 영역.
- 둘을 구분해야 하는 건 어쩌면 당연한 얘기이고, 타입스크립트 개발을 하면 할수록 자연스럽게 익혀질 것 같다.


