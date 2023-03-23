import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { homeUrl } from "@/src/functions";

export const Logo: FC<{link?: string; width?: number}> = ({link=homeUrl, width=135}) => {
  const router = useRouter()
  return (
    <button onClick={()=>{router.asPath!==homeUrl && router.push(link)}} className="flex-none items-center cursor-pointer">
      <Image
        src="/logo.png"
        blurDataURL="/logo.png"
        width={width}
        height={0}
        alt="artisanNow"
        placeholder="blur"
      />
    </button>
  );
};
