import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment  } from '../../../redux/slice/countSlice';

function Test() {
  const count = useSelector(state => state.count.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button type='button' onClick={()=>{dispatch(increment())}}>plus</button>
      Value: {count}
      <button type='button' onClick={()=>{dispatch(decrement())}}>minus</button>
    </div>
  )
}

export default Test