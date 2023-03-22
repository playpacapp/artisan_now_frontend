import { FC } from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import { IoPlayCircleOutline } from "react-icons/io5"
import { courseInfo } from "@/src/functions";

export const CourseCard: FC<{ course: courseInfo, className?: string, kind: string }> = (props) => {
  const { imageUrl, courseName, destination, artisanName, episode, duration, categories, price = "0" } = props.course;
  const kind: string = props.kind
  return (
    <a href={`/user/course/detail?kind=${kind}`} aria-hidden={true}>
      <div className={`flex flex-col max-w-sm h-fit shadow-sm hover:shadow-lg ${props.className}`}>
        <div className="relative w-full h-[200px] overflow-hidden">
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
          {kind == "live" &&
            <div className="flex flex-col px-2 py-1 absolute left-0 bottom-0">
              <h4 className="text-white">
                {courseName}
              </h4>
              <span className="text-white">{destination}</span>
              <span className="text-white text-600">$7.30 USD</span>
            </div>
          }
        </div>
        {kind != "live" &&
          <div className="flex flex-col h-fit p-2">
            <h4 className="truncate">
              {courseName}
            </h4>
            <span className="">{destination}</span>

            {kind == "course" &&
              <div className="flex flex-row gap-1 items-center mt-2">
                <Image
                  src="/image/icon/experiences.png"
                  blurDataURL={"/image/icon/experiences.png"}
                  width="24"
                  height="24"
                  alt="ICON"
                  placeholder="blur"
                />
                <span className="">{artisanName}</span>
                <span className="ml-[2rem] text-600 text-gray-900">${price} USD</span>
              </div>
            }
          </div>
        }
      </div>
    </a>
  );
};
