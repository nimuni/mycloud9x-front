import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
})

export default store