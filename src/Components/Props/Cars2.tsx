import React from "react";
type propsCars2 = {
  children: React.ReactNode;
};

export default function Cars2(props: propsCars2) {
  return (
    <>
      <h1>{props.children}</h1>
      <h3>EFGH</h3>
    </>
  );
}
