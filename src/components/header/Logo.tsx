import { FC } from "react";
import Image from "next/image";

export const Logo: FC<{link?: string}> = ({link=""}) => {
  return (
    <a href={link} className="flex-none items-center">
      <Image
        src="/logo.png"
        blurDataURL="/logo.png"
        width={128}
        height={38}
        alt="artisanNow"
        placeholder="blur"
      />
    </a>
  );
};
