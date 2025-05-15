import React, { useReducer } from 'react';

// Define the reducer function directly in the same file since it's causing issues
const reducer = (state, action) => {                              // ye function ko dusre me bhi ban sakte hai hamlog 
  switch(action.type){
    case "INCREMENT": 
      return { count: state.count + 1 };
    case "DECREMENT": 
      return { count: state.count - 1 };
    case "RESET": 
      return { count: 0 };
    default: 
      return state;
  }
};

const initialState = { count: 0 };

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};

export default UseReducer;