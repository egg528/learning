---
title: React.js 기초
sidebar_position: 4
tag: [book, react]
---
## React는 왜 필요할까?
1. Component화가 쉬워져 단일 책임 원칙에 보다 부합하는 코딩을 할 수 있다.
2. 선언형 프로그래밍으로 직관적인 코드 작성에 도움을 준다.
3. Virtual Dom


## 컴포넌트
- 페이지의 요소들을 뜻하며 리액트에서는 Component를 합쳐 페이지를 구성함
```javascript
  return (
    <div className="App">
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
```
- 위 Component는 Header, TodoEditor, TodoList로 구성됨
- 컴포넌트 안에 다른 컴포는터가 포함되어 한 페이지는 컴포넌트 트리 형식으로 구성됨


## JSX란?
- React의 Component를 만드는데 유용한 Package
- Javascript와 HTML 태그를 섞어서 사용할 수 있음
```javascript
function Body() {
  const number = 1;
  return (
    <div>
      <h1>body</h1>
      <h2>{number}</h2>
    </div>
  )
}
```
- 문자열, 숫자, 산술 표현식은 사용 가능하지만 객체는 사용할 수 없음
```javascript
// 닫힘 규칙 위반
function Body() {
  const number = 1;
  return (
    <div>
      <h1>body</h1>
      <h2>{number}</h2>
  )
};
```
```javascript
// 최상위 태그 규칙 위반
function Body() {
  const number = 1;
  return (
      <h1>body</h1>
      <h2>{number}</h2>
  )
};
```
- 지켜야 하는 규칙
  - 닫힘 규칙: 여는 태그가 있으면 반드시 닫는 태그가 필요함 `<div>닫힘없음` (불가능)
  - 최상위 태그 규칙: 반환하는 모든 태그는 반드시 최상위 태그로 감싸야 한다

## Props
```javascript
// 데이터 보내는 컴포넌트
function App() {

    const data = "data";
    
    return (
            <div>
              <Body data={data}/>
            </div>
    );
};

// 데이터 받는 컴포넌트
function Body({data}) {
    
    return (
        <div>{data}</div>
    );
}
```
- Component에 데이터를 전달하는 기본적인 방법

```javascript
// 데이터 보내는 컴포넌트
function App() {

    const data = {
        name: "권우석",
        location: "GFC"
    }
    
    return (
            <div>
              <Body data={data}/>
            </div>
    );
};

// 데이터 받는 컴포넌트
function Body({name, location}) {
    
    return (
        <div>
          <div>{name}</div>
          <div>{location}</div>
        </div>
    );
}

Body.defaultProps = {
    name: "defaultName",
    location: "defaultLocation"
}
```
- 스프레드 연산자로 여러 값 쉽게 전달 가능
- 데이터가 넘어오지 않았을 때를 대비하여 default값 추가 가능
- 값 뿐만 아니라 메서드, 컴포넌트도 전달 가능하다.


## State
```javascript
const [state, setMethod] = useState("초기값");
```
- State(상태)란 Component가 가지고 있는 값이 바뀔 수 있는 동적인 데이터이다.
- useState 메서드를 통해 상태 변수와 상태 변경 함수를 할당 받을 수 있다.


## Ref
```javascript
function Body(){
    const [text, setText] = useState("");
    const textRef = useRef();
    
    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    
    const handleOnClick = () => {
        alert(text)
        textRef.current.value = ""
    }
    
    return (
        <div>
          <input ref={textRef} value={text} onChange={{handleOnChange}} />
          <button onClick={handleOnClick}>작성 완료</button>
        </div>
    );
}
```
- Dom 요소를 직접 조작할 수 있도록 돕는 기능
- textRef를 선언하고 input 태그 ref값에 할당해두었다.
- 할당 후에는 textRef를 통해 input 태그를 직접 조작할 수 있음