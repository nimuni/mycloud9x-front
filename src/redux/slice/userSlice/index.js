import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    id: '',
    password: '',
    email: ''
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  }
})

export const {
  setUser
} = userSlice.actions
export default userSlice.reducer;  // 기본적으로 reducer를 내보낸다.