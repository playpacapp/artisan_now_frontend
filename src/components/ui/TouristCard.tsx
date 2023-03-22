import { FC } from "react";
import Image from "next/image";

export const TouristCard: FC<{ url: string; label: string }> = ({
  url,
  label,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full h-fit course-card">
      <div className="relative">
        <Image
          className="course-image"
          src={url}
          blurDataURL={url}
          width="250"
          height="150"
          style={{ width: "100%" }}
          alt="Vision"
          loading="eager"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col h-[120px] px-2">
        <h4 className="truncate">
            Title of the experience
        </h4>
        <span className="">Santiago, Chile</span>
      </div>
    </div>
  );
};