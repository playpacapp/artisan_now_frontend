import { FC } from "react";

export const DefaultButton: FC<{
    className?: string;
    action?: any
    label: string;
  }> = ({ className, label, action }) => {
    return (
      <button
        onClick = {action}
        className={
          "rounded-3xl px-5 py-2 md:px-10 md:py-3 text-lg font-medium text-center text-white border-2 border-brown-600/0 bg-brown-600 hover:border-2 hover:border-brown-600 hover:bg-brown-300/[.15] hover:text-brown-600 leading-4 " +
          className
        }
      >
        {label}
      </button>
    );
  };