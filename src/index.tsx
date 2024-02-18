import React from "react";
import ReactDOM from "react-dom/client";
import PropsPage from "./Components/Props/PropsPage";
import "./style.css";
import UseStatePage from "./Components/useState/UseStatePage";
import UseReducerPage from "./Components/useReducer/UseReducerPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PropsPage />
    <UseStatePage />
    <UseReducerPage />
  </React.StrictMode>
);
