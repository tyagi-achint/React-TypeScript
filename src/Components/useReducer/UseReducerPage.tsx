import Count from "./Count";
import Reset from "./Reset";

export default function UseReducerPage() {
  return (
    <div className="useReducerPage">
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        useReducer
      </h1>
      <Count />
      <Reset />
    </div>
  );
}
