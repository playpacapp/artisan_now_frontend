import { FC } from "react";

export const SocialLink: FC<{ url: string; path: string }> = ({ url, path }) => {
    return (
      <a
        href="${url}"
        target="_blank"
        className="px-4 py-2 text-lg font-medium text-center text-white bg-orange-600 rounded-xl hover:bg-orange-100 hover:text-orange-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="50px"
          height="50px"
          fill="currentColor"
        >
          <path d={path} />
        </svg>
      </a>
    );
  };
  