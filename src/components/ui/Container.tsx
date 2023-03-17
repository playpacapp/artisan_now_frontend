import React from "react"

export function Container(props: any) {
  return (
    <div
      className={`w-full px-5 py-10 md:px-10 md:py-10 lg:px-30 lg:py-15 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}