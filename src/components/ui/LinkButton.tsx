import { FC } from "react";

export const LinkButton: FC<{
    className?: string;
    action?: any
    label: string;
  }> = ({ className, label, action }) => {
    return (
      <button
        onClick = {action}
        className={
          "px-4 py-1 rounded-3xl text-sm font-medium text-blue-500 hover:text-gray-900 hover:bg-brown-100 " +
          className
        }
      >
        {label}
      </button>
    );
  };