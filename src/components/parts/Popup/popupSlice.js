import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  popupVisible: false,
  width: 400,
  height: 200,
  popupTitle: '',
  popupContent: '',
  popupImgSrc: '',
  email: '',
}

export const popupSlice = createSlice({
  name: 'popupVisible',
  initialState,
  reducers: {
    setPopupVisible: (state, action) => {
      state.popupVisible = action.payload
    },
    showPopup: (state, action) => {
      state.popupVisible = true;
      state.width = action.payload.width;
      state.height = action.payload.height;
      state.popupTitle = action.payload.title;
      state.popupContent = action.payload.content;
      state.popupImgSrc = action.payload.imgSrc;
      state.email = action.payload.email;
    },
    hidePopup: (state) => {
      state.popupVisible = false;
      state.width = initialState.width;
      state.height = initialState.height;
      state.popupTitle = '';
      state.popupContent = '';
      state.popupImgSrc = '';
      state.email = '';
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  }
})

export const {
  setPopupVisible, showPopup, hidePopup, setEmail
} = popupSlice.actions
export default popupSlice.reducer;  // 기본적으로 reducer를 내보낸다.