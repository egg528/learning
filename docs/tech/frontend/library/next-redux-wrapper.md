---
title: next-redux-wrapper
tag: [next.js, redux]
---
## 글 링크
- [next-redux-wrapper repo](https://github.com/kirill-konshin/next-redux-wrapper)

## 내용 정리
### 사용 이유
- 일반적인 리액트 앱에는 하나의 리덕스 스토어만 존재하고 사용하기 때문에 어렵지 않다.
- 하지만 Next.js를 사용한 App(static site generator or server side rendering를 사용한)의 경우 서버에 추가적인 Store가 필요해진다.
  - Redux로 연결된 컴포넌트에 Render하기 위해
- next-redux-wrapper는 Server를 위한 Store를 자동으로 생성해주고 Client와 같은 상태를 공유하도록 보장한다.



### 사용법
#### 1. Reducer 생성법
```typescript
const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  }
  return rootReducer(state, action);
};
```
- next-redux-wrapper를 사용한다면 reducder는 HYDRATE action handler를 필수로 가지고 있어야 한다.
- getStaticProps 또는 getServerSideProps를 가진 페이지에 접근하면 HYDRATE action이 dispatch됨
- 이때 위 코드는 Client의 store 상태를 Server측 store로 merge하는 역할을 한다.
- server store = client store 상태 유지


#### 2. getServerSideProps, getInitialPageProps, getStaticPorps 사용하기
```typescript
export const getServerSideProps = wrapper.getServerSideProps(store => ({req, res, ...etc}) => {
  console.log('2. Page.getServerSideProps uses the store to dispatch things');
  store.dispatch({type: 'TICK', payload: 'was set in other page'});
});

Page.getInitialProps = wrapper.getInitialPageProps(store => ({pathname, req, res}) => {
  console.log('2. Page.getInitialProps uses the store to dispatch things');
  store.dispatch({
    type: 'TICK',
    payload: 'was set in error page ' + pathname,
  });
});

export const getStaticProps = wrapper.getStaticProps(store => ({preview}) => {
  console.log('2. Page.getStaticProps uses the store to dispatch things');
  store.dispatch({
    type: 'TICK',
    payload: 'was set in other page ' + preview,
  });
});
```
- 위 예시처럼 wrapper를 활용해 method를 정의해줘야 한다.
- 이렇게 정의를 해줘야 해당 페이지에 접근할 때마다 action type HYDRATE가 동작함