import { FC } from "react";
import Image from "next/image";

export const SocialLink: FC<{ href?: string; url: string; size?: number; label: string }> = ({ href="", url, size=64, label }) => {
    return (
      <a
        href={href}
        target="_blank"
        className="px-2 py-2 text-white hover:opacity-70" rel="noreferrer"
      >
        <Image
          src={url}
          blurDataURL={url}
          width={size}
          height={size}
          alt={label}
          placeholder="blur"
        />
      </a>
    );
  };
  