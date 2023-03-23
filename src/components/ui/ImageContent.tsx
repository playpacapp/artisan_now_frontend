import Image from "next/image";
import { FC } from "react";
import { Container } from "./Container";

export const ImageContent: FC<{ url: string; label: string; size: number }> = ({
  url,
  label,
  size,
}) => {
  return (
    <div className="flex flex-col px-2 py-2 justify-center items-center">
      <Image
        src={url}
        blurDataURL={url}
        width={size}
        height={size}
        alt={label}
        placeholder="blur"
      />
      <p className="">{label}</p>
    </div>
  );
};

export default ImageContent;
