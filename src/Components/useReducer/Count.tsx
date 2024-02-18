import { useReducer } from "react";

const initialState = { count: 0 };

type stateType = { count: number };

type actionType = { value: number; type: string };

function update(state: stateType, action: actionType) {
  switch (action.type) {
    case "+":
      return { count: state.count + action.value };
    case "-":
      return { count: state.count - action.value };
    default:
      return state;
  }
}

export default function Count() {
  const [state, dispatch] = useReducer(update, initialState);
  return (
    <>
      <h3>Count : {state.count}</h3>
      <button onClick={() => dispatch({ type: "+", value: 1 })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "-", value: 1 })}>
        Decrease
      </button>
    </>
  );
}
