---
title: Context
sidebar_position: 6
---
## Context란?
지정한 Component를 시작으로 그 아래 모든 Component들에게 데이터를 공급하는 기능

### 사용법
```javascript
// 선언부
export const TodoContext = React.createContext();

function App() {
    return (
        <div className="App">
            <Header />
            <TodoContext.Provider value={todo, onDelete}>
                <TodoList/>
            </TodoContext.Provider>
        </div>
    )
}


// 사용부
const TodoList = () => {
    const { todo } = useContext(TodoContext);
    
    ...
}
```
- React.createContext로 Context를 생성한다.
- Provider를 활용해 데이터 전달의 시작점이 될 Component와 전달할 데이터를 설정한다.
- 하위 Component에서는 useContext()를 통해 데이터를 받아서 사용할 수 있다.


### 주의할 점
1. 비슷한 데이터들끼리 Context 묶기
   - 위 예시에서 todo가 변경되면 Context.Provider도 컴포넌트이기에 리렌더가 된다.
   - 이 과정에서 Provider의 모든 props가 바뀐다. (즉, onDelete도 재생성 된다)
   - 이때 변경된 데이터를 사용하지 않더라도 동일한 Context를 사용하는 Component들은 모두 다시 Render된다.
     - 해결책: 유사한 데이터들끼리 Context를 분리해야 한다.