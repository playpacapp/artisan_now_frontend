import Image from "next/image";
import { FC } from "react";

export const ImageButton: FC<{ url: string; label: string; size: number }> = ({
  url,
  label,
  size,
}) => {
  return (
    <div className="cursor-pointer flex flex-col m-2 p-1 justify-center items-center hover:opacity-80 border-b-2 border-transparent hover:border-b-2 hover:border-brown-900">
      <Image
        className="mx-auto"
        src={url}
        blurDataURL={url}
        width={size}
        height={size}
        alt={label}
        placeholder="blur"
      />
      <span className="text-sm text-100 text-gray-700 mt-5 text-center hidden sm:block">{label}</span>
    </div>
  );
};
