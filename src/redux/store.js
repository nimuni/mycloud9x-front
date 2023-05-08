import { configureStore } from "@reduxjs/toolkit";
import countReducer from '@slice/countSlice'
import userReducer from '@slice/userSlice'
import backdropReducer from '@slice/backdropSlice'
import popupReducer from '@parts/Popup/popupSlice'

// https://youtu.be/9wrHxqI6zuM 생활코딩 redux-toolkit

const store = configureStore({
  reducer: {
    // selector name: reducer
    count: countReducer,
    user: userReducer,
    backdrop: backdropReducer,
    popup: popupReducer,
  },
})

export default store