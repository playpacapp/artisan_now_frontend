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
          "px-4 py-2 text-lg font-medium text-center text-white border-2 border-orange-600/0 bg-orange-600 hover:border-2 hover:border-orange-600 hover:bg-orange-300/[.15] hover:text-orange-600 " +
          className
        }
      >
        {label}
      </a>
    );
  };