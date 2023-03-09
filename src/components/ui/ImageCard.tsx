import { FC } from "react";
import Image from "next/image";

export const ImageCard: FC<{ url: string; label: string }> = ({
  url,
  label,
}) => {
  return (
    <div className="flex flex-col w-full h-fit rounded border hover:opacity-80 cursor-pointer bg-white">
      <Image
        className="rounded-t"
        src="/image/card/5043-original.jpg"
        blurDataURL={"/image/card/5043-original.jpg"}
        width="250"
        height="100"
        style={{width:"100%"}}    
        alt="Vision"
        loading="eager"
        placeholder="blur"
      />
      <div className="flex flex-col h-[120px] px-2 py-1">
        <a href="" className="text-md truncate text-400 text-gray-900">
          Tinos Ecolodge
        </a>
        <span className="text-sm text-100 text-gray-500 truncate">Tinos, Greece</span>
        <div className="flex flex-row items-center justify-left space-x-2 text-sm py-1 text-300 text-gray-400">
          <Image
            src="/image/icon/experiences.png"
            blurDataURL={"/image/icon/experiences.png"}
            width="24"
            height="24"
            alt="ICON"
            placeholder="blur"
          />
          <span className="text-sm text-100 text-gray-500 truncate">Artisan name</span>
        </div>
        <span className="text-md px-2 py-2 text-gray-900 truncate">$95 USD</span>
      </div>      
    </div>
  );
};
