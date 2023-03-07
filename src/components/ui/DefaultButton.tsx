import { FC } from "react";

export const DefaultButton: FC<{
    url: string;
    className?: string;
    target: string;
    label: string;
  }> = ({ url, className, target, label }) => {
    return (
      <a
        href="${url}"
        target={target}
        className={
          "px-4 py-2 text-lg font-medium text-center text-white border-2 border-brown-600/0 bg-brown-600 hover:border-2 hover:border-brown-600 hover:bg-brown-300/[.15] hover:text-brown-600 " +
          className
        }
      >
        {label}
      </a>
    );
  };