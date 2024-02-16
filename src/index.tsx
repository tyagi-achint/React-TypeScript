import React from "react";
import ReactDOM from "react-dom/client";
import Person from "./Components/Person";
import Friends from "./Components/Friends";
import Cars from "./Components/Cars";
import Cars2 from "./Components/Cars2";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const friendsList = [
  {
    first: "Abcd",
    last: "efgh",
  },
  {
    first: "Abcd",
    last: "efgh",
  },
  {
    first: "Abcd",
    last: "efgh",
  },
];

root.render(
  <React.StrictMode>
    <Person name="Achint Tyagi" />
    <Friends friends={friendsList} />
    <Cars>These are my cars</Cars>
    <Cars2>
      <Cars>These are my 2nd Cars</Cars>
    </Cars2>
  </React.StrictMode>
);
