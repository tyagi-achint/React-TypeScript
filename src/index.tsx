import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navbar name="Achint" />
  </React.StrictMode>
);