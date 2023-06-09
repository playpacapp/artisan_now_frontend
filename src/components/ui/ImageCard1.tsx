import { FC } from "react";
import { Button } from "./Button";
import Image from "next/image";

export const ImageCard: FC<{ url: string; label: string }> = ({
  url,
  label,
}) => {
  return (
    <div className="flex flex-col w-fit bg-brown-100 border-[1px] border-brown-200 hover:opacity-80">
      <a
        className="relative before:absolute before:inset-0 before:bg-black before:opacity-0 hover:before:opacity-30"
        href=""
        target=""
      >
        <svg
          className="absolute top-[calc(50%-24px)] left-[calc(50%-24px)] text-white/[.8] z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="48px"
          height="48px"
          fill="currentColor"
        >
          <path d="M 32 15 C 14.938 15 12.6597 15.1777 10.4727 17.4277 C 8.28566 19.6777 8 23.252 8 32 C 8 40.748 8.28566 44.3233 10.4727 46.5723 C 12.6597 48.8213 14.938 49 32 49 C 49.062 49 51.3403 48.8213 53.5273 46.5723 C 55.7143 44.3223 56 40.748 56 32 C 56 23.252 55.7143 19.6777 53.5273 17.4277 C 51.3403 15.1777 49.062 15 32 15 Z M 32 19 C 45.969 19 49.3792 19.0624 50.5352 20.2324 C 51.6912 21.4024 52 24.538 52 32 C 52 39.462 51.6912 42.5976 50.5352 43.7676 C 49.3792 44.9376 45.969 45 32 45 C 18.031 45 14.6208 44.9376 13.4648 43.7676 C 12.3088 42.5976 12.0313 39.462 12.0313 32 C 12.0313 24.538 12.3088 21.4024 13.4648 20.2324 C 14.6208 19.0624 18.031 19 32 19 Z M 27.9492 25.0176 L 27.9492 38.9824 L 40.0957 31.9453 L 27.9492 25.0176 Z" />
        </svg>
        <Image
          src="/image/card/5043-original.jpg"
          blurDataURL={"/image/card/5043-original.jpg"}
          width="280"
          height="157"
          alt="Vision"
          loading="eager"
          placeholder="blur"
        />
      </a>
      <div className="h-[120px] px-5 py-2">
        <a
          href=""
          className="text-xl text-400 font-semibold block py-2 hover:text-brown-600"
        >
          Tinos Ecolodge
        </a>
        <span className="block py-1">Tinos, Greece</span>
        <div className="flex flex-row items-center justify-left space-x-2">
          <Image
            src="/image/icon/experiences.png"
            blurDataURL={"/image/icon/experiences.png"}
            width="32"
            height="32"
            alt="ICON"
            placeholder="blur"
          />
          <span className="block py-2">Artisan name</span>
        </div>
      </div>
      <span className="text-red-800 text-medium text-xl px-5 py-2">
        $95
      </span>      
    </div>
  );
};
