import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '@axios/axios'

export const changeUserPassword = createAsyncThunk(
  'user/changePassword',
  async ({userId, password}, thunkAPI) => {
    const uri = `/user/${userId}`
    const response = await axiosInstance.put(uri, {password: password})
    if(response.status==201){
      return response.data
    } else {
      throw "Error in changePassword"
    }
  }
)
export const changeUserNickname = createAsyncThunk(
  'user/changeNickname',
  async ({userId, nickname}, thunkAPI) => {
    const uri = `/user/${userId}`
    const response = await axiosInstance.put(uri, {nickname: nickname})
    if(response.status==201){
      return response.data
    } else {
      throw "Error in changeNickname"
    }
  }
)