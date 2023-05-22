import { createSlice } from '@reduxjs/toolkit'
import { changeUserPassword, changeUserNickname} from './method.js'

const initialState = {
  _id: '',
  provider: '',
  id: '',
  email: '',
  email_verified: false,
  nickname: '',
  role: '',
  createdAt: null,
  updatedAt: null,
}



export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("call setUser")
      console.log(state)
      console.log(action)
      const { _id, provider, id, email, email_verified, nickname, role, createdAt, updatedAt} = action.payload
      state._id = _id;
      state.provider = provider;
      state.id = id;
      state.nickname = nickname;
      state.email_verified = email_verified;
      state.email = email;
      state.role = role;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeUserPassword.pending, (state) => {})
      .addCase(changeUserPassword.fulfilled, (state, action) => {
        console.log("changeUserPassword fulfilled")
        console.log(state)
        console.log(action.payload)
      })
      .addCase(changeUserPassword.rejected, (state) => {})

    builder
      .addCase(changeUserNickname.pending, (state) => {
        console.log("changeUserNickname pending")
        console.log(state);
      })
      .addCase(changeUserNickname.fulfilled, (state, action) => {
        console.log("changeUserNickname fulfilled")
        console.log(action.payload)
        const { nickname, updatedAt } = action.payload;
        state.nickname = nickname;
        state.updatedAt = updatedAt;
      })
      .addCase(changeUserNickname.rejected, (state) => {
        console.log("changeUserNickname rejected")
        console.log(state);
      })
  }
})

export const {
  setUser
} = userSlice.actions
export default userSlice.reducer;  // 기본적으로 reducer를 내보낸다.
export { changeUserPassword, changeUserNickname }