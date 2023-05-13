import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '@axios/axios'

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

export const changeUserPassword = createAsyncThunk(
  'user/changePassword',
  async ({userId, password}, thunkAPI) => {
    const uri = `/user/${userId}`
    const response = await axiosInstance.put(uri, {password: password})
    return response
  }
)
export const changeUserNickname = createAsyncThunk(
  'user/changeNickname',
  async ({userId, nickname}, thunkAPI) => {
    const uri = `/user/${userId}`
    const response = await axiosInstance.put(uri, {nickname: nickname})
    return response.data
  }
)

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
        console.log(state)
        console.log(action.payload)
        const axiosResponse = action.payload
        if(axiosResponse.status == 201){
          
        }
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