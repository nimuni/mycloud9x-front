import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

export const counterSlice = createSlice({
  name: 'counter',  // 의미없지않나...
  initialState, // 초기값
  reducers: { // action정의
    increment: (state, action) => {
      state.value += 1
    },
    decrement: (state, action) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload // 기본적으로 payload를 사용하면 전달되게 디폴트값
    },
  },
})

// dispatch에서 사용할 함수명들을 export함. (dispatch(slice.increment) 라고 치기 귀찮으니까 함수명 자체를 export)
export const { increment, decrement, incrementByAmount } = counterSlice.actions; 
export default counterSlice.reducer;  // 기본적으로 reducer를 내보낸다.