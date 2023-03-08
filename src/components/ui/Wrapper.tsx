import React from "react"

export function Wrapper(props: any) {
  return (
    <div
      className={`w-full relative bg-white mx-auto ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}