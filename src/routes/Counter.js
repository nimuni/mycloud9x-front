import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../counter";

const Counter = () => {
  //useSelector를 통해 redux store에서 특정 값을 관찰할 수 있다
  const count = useSelector((state) => state.counter.value); //useSelector는 첫 번째 인자로 store 자체를 넘겨주고, 이 store를 통해 slice의 state에 접근할 수 있다.

  //dispatch에 action을 전달하면 해당 동작이 실행된다
  const dispatch = useDispatch();

  //increment(1증가) 동작
  const handleIncrement = () => dispatch(increment());
  //decrement(1감소) 동작
  const handleDecrement = () => dispatch(decrement());

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default Counter;
