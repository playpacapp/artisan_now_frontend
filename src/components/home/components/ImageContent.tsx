import Image from "next/image";
import { FC } from "react";

export const ImageContent: FC<{ url: string; label: string; size: number }> = ({
  url,
  label,
  size,
}) => {
  return (
    <div className="w-full justify-center lg:px-3 lg:py-3">
      <div className="flex flex-col px-2 py-2 justify-center items-center">
        <Image
          src={url}
          blurDataURL={url}
          width={size}
          height={size}
          alt={label}
          placeholder="blur"
        />
        <span className="text-gray-700 mt-5">{label}</span>
      </div>
    </div>
  );
};

export default ImageContent;