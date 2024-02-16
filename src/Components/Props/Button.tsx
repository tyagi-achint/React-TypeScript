import React from "react";

type buttonProps = {
  handleClick: (id: number) => void;
};

export default function Button(props: buttonProps) {
  return (
    <>
      <button onClick={() => props.handleClick(1)}>Click</button>
      <button onClick={() => props.handleClick(2)}>Click</button>
    </>
  );
}
