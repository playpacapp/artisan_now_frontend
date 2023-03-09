import Image from "next/image";
import { FC } from "react";

export const ImageContent: FC<{ url: string; label: string; size: number }> = ({
  url,
  label,
  size,
}) => {
  return (
    <div className="px-10 py-10">
      <div className="flex flex-col px-2 py-2 justify-center items-center">
        <Image
          src={url}
          blurDataURL={url}
          width={size}
          height={size}
          alt={label}
          placeholder="blur"
        />
        <p className="text-left py-5 text-100 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
          {label}
        </p>
      </div>
    </div>
  );
};

export default ImageContent;
