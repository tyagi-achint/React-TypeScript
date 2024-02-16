import React from "react";
import ReactDOM from "react-dom/client";
import PropsPage from "./Components/Props/PropsPage";
import "./style.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PropsPage />
  </React.StrictMode>
);
