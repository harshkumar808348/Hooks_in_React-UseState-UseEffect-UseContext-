import React, { useReducer } from 'react';
import Reducer from './Reducer.jsx'; // Import reducer from separate file

const initialState = { count: 0 };

const Counter = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  
  return (
    <>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};

export default Counter;