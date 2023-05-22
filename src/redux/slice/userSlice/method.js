import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '@axios/axios'

export const changeUserPassword = createAsyncThunk(
  'user/changePassword',
  async ({userId, password}, thunkAPI) => {
    const uri = `/user/${userId}`
    try {
      const response = await axiosInstance.put(uri, {password: password})
      if(response.status==201){
        return response.data
      } else {
        thunkAPI.rejectWithValue("Error in changePassword")
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
export const changeUserNickname = createAsyncThunk(
  'user/changeNickname',
  async ({userId, nickname}, thunkAPI) => {
    try {
      const uri = `/user/${userId}`
      const response = await axiosInstance.put(uri, {nickname: nickname})
      if(response.status==201){
        return response.data
      } else {
        thunkAPI.rejectWithValue("Error in changeNickname")
      }
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data)
    }
  }
)