import React from "react"

export function Container(props: any) {
  return (
    <div
      className={`w-full px-5 py-5 md:px-10 md:py-10 lg:px-15 flex items-center justify-center ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}