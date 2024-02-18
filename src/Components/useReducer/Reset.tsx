import { useReducer } from "react";

const initialState = { count: 0 };

type stateType = { count: number };

type updatevalue = { value: number; type: "+" | "-" };

type resetValue = { type: "reset" };

type actionType = updatevalue | resetValue;

function update(state: stateType, action: actionType) {
  switch (action.type) {
    case "+":
      return { count: state.count + action.value };
    case "-":
      return { count: state.count - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function Reset() {
  const [state, dispatch] = useReducer(update, initialState);
  return (
    <>
      <h3>Count : {state.count}</h3>
      <button onClick={() => dispatch({ type: "+", value: 10 })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "-", value: 10 })}>
        Decrease
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}
