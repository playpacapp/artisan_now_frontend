import { FC } from "react";

export const IconInput: FC<{
    type: string;
    placeholder: string;
    className: string;
    path: string;
  }> = ({ type, placeholder, className, path }) => {
    return (
      <div className={`flex items-center relative ${className}`}>
        <svg
          className="absolute left-3 z-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          strokeWidth="1.5"
          stroke="#555555"
        >
          <path d={path} />
        </svg>
        <input
          className="leading-none rounded-3xl text-left text-gray-600 px-10 py-3 w-full border border-gray-400 outline-none"
          type={type}
          placeholder={placeholder}
        />
      </div>
    );
  };