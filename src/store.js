import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";

//new middleware
const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  console.log("before state", store.getState());

  //액션을 다음 미들웨어 또는 리듀서에 전달
  let result = next(action);

  //next(action)후 state는 정의된 동작에 따라 변한다
  //next(action)없이 return store.getState()하면 상태는 변하지 않는다
  console.log("next state", store.getState());

  console.groupEnd();

  return result;
};

//redux store 스토어는 컴포넌트의 상태를 관리하는 저장소다. 하나의 프로젝트는 하나의 스토어만 가질 수 있다.(reducer란 action type에 따라 state를 컨트롤하는 함수라고 생각하면 된다.)
export const store = configureStore({
  reducer: {
    //add counterReducer
    counter: counterReducer,
    //login: loginReducer, 등으로 원하는 reducer 추가가능
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
