import { FC } from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import { IoPlayCircleOutline } from "react-icons/io5"

export const OnlineCourseCard: FC<{ url: string; label: string }> = ({
  url,
  label,
}) => {
  return (
    <div className="flex flex-col w-full h-fit course-card">
      <div className="relative">
        <Image
          className="course-image"
          src={url}
          blurDataURL={url}
          width="250"
          height="150"
          style={{ width: "100%" }}
          alt="Online Stream"
          loading="eager"
          placeholder="blur"
        />
        <div className="absolute left-[calc(50%-24px)] top-[calc(50%-24px)]">
          <Icon icon={IoPlayCircleOutline} color={"white"} size={48} />
        </div>
        <div className="flex flex-col px-2 py-1 absolute left-0 bottom-0">
          <h4 className="text-white">
            Title of Experiences
          </h4>
          <span className="text-white">destination</span>
          <span className="text-white text-600">$7.30 USD</span>
        </div>
      </div>
    </div>
  );
};
