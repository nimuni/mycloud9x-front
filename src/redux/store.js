import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from '@slice/userSlice'
import backdropReducer from '@slice/backdropSlice'
import popupReducer from '@parts/Popup/popupSlice'

// https://youtu.be/9wrHxqI6zuM 생활코딩 redux-toolkit
const reducers = combineReducers({
  // selector name: reducer
  user: userReducer,
  backdrop: backdropReducer,
  popup: popupReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  // Redux Toolkit에서 자동생성해주는 action이 action 생성자 함수형태라서 string이 아니라 함수가 전달되서 오류. 
  // toString 대신 미들웨어 선언
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
})

export default store