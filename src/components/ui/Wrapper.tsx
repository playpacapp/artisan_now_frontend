import React from "react"

export function Wrapper(props: any) {
  return (
    <div
      className={`w-full relative bg-white px-15 bg-[url('/productCurvyLines.png')] ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}