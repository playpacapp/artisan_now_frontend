import React from "react"

export default function Wrapper(props: any) {
  return (
    <div
      className={`relative bg-white flex flex-wrap ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}