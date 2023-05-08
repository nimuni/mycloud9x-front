import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadBucket = createAsyncThunk(
  // action 이름
  "load/Bucket",
  // 처리할 비동기 함수
  async () => {
    console.log("aa");
    return null;
  }
);

const bucketSlice = createSlice({
  name: "bucket",
  initialState: { list: 0 },
  reducers: {},
  // extraReducer에 비동기 함수의 pending, fulfilled, rejected를 처리할 내용을 넣어준다!
  extraReducers: {
    [loadBucket.pending]: (state, action) => {
      console.log("pending");
    },
    // fullflled 되었을 때, 서버에서 받아온 데이터를 state에 넣어줌!
    // 첫번째 파라미터는 redux의 state이고 두번째 파라미터는 action
    [loadBucket.fulfilled]: (state, action) => {
      state.list = 2;
      console.log("fulfilled");
      console.log(state.list);
    },
    [loadBucket.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});
export default bucketSlice.reducer;
