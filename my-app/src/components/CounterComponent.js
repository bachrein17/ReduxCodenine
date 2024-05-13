import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/slices/counterSlice";
import "./CounterComponent.css"; 
function CounterComponent() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div class="counter">
      <h2>Counter</h2>
      <div class="CounterBody">
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
      <div class="CounterFooter">
        <input type="number" onChange={(e) => dispatch(incrementByAmount(parseInt(e.target.value) || 0))} placeholder="Enter value" />
        <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
      </div>
    </div>
  );
}
export default CounterComponent;
