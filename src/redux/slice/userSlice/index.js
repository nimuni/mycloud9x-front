import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  _id: '',
  provider: '',
  id: '',
  email: '',
  email_verified: false,
  role: '',
  createdAt: null,
  updatedAt: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { _id, provider, id, email, email_verified, role, createdAt, updatedAt} = action.payload
      state._id = _id;
      state.provider = provider;
      state.id = id;
      state.email = email;
      state.email_verified = email_verified;
      state.role = role;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
    }
  }
})

export const {
  setUser
} = userSlice.actions
export default userSlice.reducer;  // 기본적으로 reducer를 내보낸다.