import { FC } from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import { IoPlayCircleOutline } from "react-icons/io5"
import { courseInfo } from "@/src/functions";

export const CourseCard: FC<{ course: courseInfo, className?: string }> = (props) => {
  const { imageUrl, courseName, destination, artisanName, episode, duration, categories, price = "0" } = props.course;
  return (
    <a href="/user/course/detail" aria-hidden={true}>
      <div className={`flex flex-col w-full h-fit ${props.className}`}>
        <div className="relative">
          <Image
            className="course-image"
            src={imageUrl}
            blurDataURL={imageUrl}
            width="250"
            height="150"
            style={{ width: "100%" }}
            alt="Vision"
            loading="eager"
            placeholder="blur"
          />
          <div className="absolute left-[calc(50%-24px)] top-[calc(50%-24px)]">
            <Icon className="play" icon={IoPlayCircleOutline} size={48} />
          </div>
        </div>
        <div className="flex flex-col gap-1 h-fit px-2 py-1">
          <h4 className="truncate">
            {courseName}
          </h4>
          <span className="">{destination}</span>

          <div className="flex flex-row items-center space-x-2">
            <Image
              src="/image/icon/experiences.png"
              blurDataURL={"/image/icon/experiences.png"}
              width="24"
              height="24"
              alt="ICON"
              placeholder="blur"
            />
            <span className="">{artisanName}</span>
            <span className="ml-10 text-800 text-gray-900 w-full text-end">{price} USD</span>
          </div>
          <div className="flex flex-row gap-10">
            <span className="">Episode: {episode}</span>
            <span className="">Total Duration: {duration}</span>
          </div>
          <div className="flex flex-row gap-10">
            {categories?.map((item) => (
              <span key={item} className="">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </a>

  );
};
