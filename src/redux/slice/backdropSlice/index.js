import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  backdropStr: ''
}

export const backdropSlice = createSlice({
  name: 'backdrop',
  initialState,
  reducers: {
    showLoading: (state, action) => {
      state.isLoading = true;
      state.backdropStr = action.payload;
    },
    hideLoading: (state, action) => {
      state.isLoading = false;
      state.backdropStr = action.payload;
    },
  }
})

export const { showLoading, hideLoading } = backdropSlice.actions;
export default backdropSlice.reducer; // 기본적으로 reducer를 내보낸다.