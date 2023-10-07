---
title: React Hook 
sidebar_position: 5
---
## useEffect란?

리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있는 Hook

### useEffect 사용법

```javascript
// useEffect(콜백 함수, 의존 배열)

// 1. 마운트 시점에만 실행
useEffect(()=> {
	// 실행 코드
}, [])

// 2. 특정 데이터가 바뀌었을 때 (배열에 포함된 데이터들 중 1개라도 바뀌면 함수 실행)
useEffect(()=> {
	// 실행 코드
}, [데이터1, 데이터2])

// 컴포넌트가 렌더링될 때 언제나
// 2. 특정 데이터가 바뀌었을 때 (배열에 포함된 데이터들 중 1개라도 바뀌면 함수 실행)
useEffect(()=> {
	// 실행 코드
})
```


### cleanup 함수

useEffect 콜백 함수는 함수를 반환할 수 있는데 이 함수가 CleanUp 함수이다.

렌더링이 다시 일어날 때 실행되는 함수로 이전에 남은 함수가 실행되어 메모리 누수가 일어나는 일을 막을 수 있다.

```javascript
useEffect(() => {
	// 실행 코드

	return function cleanup() {
		// clean up 코드
	}
}, [])
```

---

##  useReducer란?

- State를 관리하는 hook으로 useState를 대체할 수 있다?
- 상태 변화 로직을 Component에서 분리할 수 있다.
- 상태 변경 메소드가 컴포넌트 내부에 여러개 생길 때 이를 컴포넌트 외부로 분리할 때 사용함.

### 사용법

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

- useState와 비슷하지만 dispatch와 reducer가 다르다.
- dispatch: reducer 함수를 실행시키고 state 관리를 위해 사용된다.
  - 어떻게 상태를 변경할지 알려줘야 한다. (아래 예시)
- reducer: 컴포넌트 외부에서 state를 업데이트하는 로직 (state와 action을 인자로 받는다.)

```javascript
// reducer
function reducer(state, action) {
  switch (action.type){
    case "CREATE" : {
      return [action.newItem, ...state];
    }

    case "UPDATE" : {
      return state.map((it) => {
        if(it.id === action.targetId) {
          return {
            ...it,
            isDone: !it.isDone,
          };
        }
        return it;
      })
    }

    case "DELETE" : {
      return state.filter((it) => it.id !== action.targetId);
    }

    default:
      return state;
  }
}

// Component 내부 사용부
function App() {
...
dispatch({
      type: "CREATE",
      newItem: newItem
    });
...
}
```

---
## useMemo란?
- 특정 함수를 호출했을 때 반환값을 기억하고 이후 함수 호출 반환 값으로 활용한다.
- 의존성 배열에 포함된 값이 변할 경우 함수 로직을 다시 실행한다.


### 사용법

```javascript
const value = useReducer(callback, deps);
```
- value: useMemo가 적용된 callback 함수
- callback: useMemo를 적용할 메서드
- deps: 기억한 값을 반환할지 새로 연산을 수행할지를 결정하는 기준 값들(배열)


---
## 리액트 고차 컴포넌트(HOC)
- 기존 컴포넌트에 특정 기능을 추가해 강화된 컴포넌트를 반환한다.
- 목적은 횡단 관심사 분리이다.
- 여러 곳에서 쓰이는 로직을 한 곳에서 관리한다.


### 예시
```javascript
function withLifeCycleLogging(WrappedComponent){
    return (props) => {
        useEffect(() => {
            console.log("Mount!");
            return () => console.log("Unmount");
        }, []);
        
        useEffect(() => {
            console.log("Update!");
        })
      
      return <WrappedComponent {...props} />;
    }
}
```
- Component를 인자로 넣으면 LifeCycleLoggin 기능이 추가된 Component 반혼

---
## React.memo
인수로 전달한 컴포넌트를 메모이제이션된 컴포넌트로 변환하여 반환한다.

### 사용법
```javascript
const memoizedComp = React.memo(Comp);
```

---
## useCallback이란?
Component가 리렌더되어도 내부에 작성된 함수를 다시 생성하지 않도록 메모이제이션하는 리액트 훅


### 사용법
```javascript
const memoizedFunc = useCallback(func, deps)
```
- func: 메모이제이션할 함수
- deps: 의존성 배열

### 주의할 점
```javascript
// 이 경우 state가 변경될 때마다 함수가 재생성되어 useCallback이 의미가 없다
const onCreate = useCallback(() => {
    setState([newItem, ...state])
}, [state])


// 이 경우 함수가 처음 마운트될 때의 state값으로 지정되어 있다.
// 때문에 함수 내부의 ...state는 항상 초기값 state이다.
const onCreate = useCallback(() => {
  setState([newItem, ...state])
}, [])


// 해결책 - 함수로 인자를 전달하면 항상 최신의 state를 반영할 수 있다.
const onCreate = useCallback(() => {
  setState((state) => [newItem, ...state])
}, [])
```