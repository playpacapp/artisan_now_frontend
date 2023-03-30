import { FC } from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import { IoPlayCircleOutline } from "react-icons/io5"
import { courseInfo } from "@/src/functions";
import {OnlineIcon, DestinationIcon, PlayIcon} from "./customIcons"


export const CourseCard: FC<{ course: courseInfo, className?: string, kind: string, artisanName:string }> = (props) => {
  
  const { imageUrl, courseName, hostName, destination, episode, duration, categories, price = "0" } = props.course;
  const kind: string = props.kind
  const artisanName: string = props.artisanName
  const svgUrl = (kind == 'online') ? OnlineIcon : DestinationIcon
  
  return (
    <a href={`/user/course/detail?kind=${kind}`} aria-hidden={true}>
      <div className={`flex flex-col max-w-sm h-fit rounded-[lg] border shadow-lg hover:shadow-xl hover:opacity-[0.9] ${props.className}`}>
        <div className="relative w-[320] h-[240] overflow-hidden">
          <Image
            className="object-cover course-image"
            src={imageUrl}
            blurDataURL={imageUrl}
            width="250"
            height="150"
            style={{ width: "100%", height: "100%" }}
            alt="Vision"
            loading="eager"
            placeholder="blur"
          />
          {kind != "tourist" && 
            <div className="absolute left-[calc(50%-24px)] top-[calc(50%-24px)] z-[50] bg-white rounded-md">
              <Image                
                src={PlayIcon}
                width="32"
                height="32"
                alt="ICON"
              />
            {/* <Icon className="play" icon={IoPlayCircleOutline} size={48} /> */}
          </div>
          }          
          {kind == "live" &&
            <div className="flex flex-col px-2 py-1 absolute left-0 bottom-0">
              <h5 className="text-white">
                {courseName}
              </h5>
              <span className="text-white">{destination}</span>
              <span className="text-white text-600">$7.30 USD</span>
            </div>
          }
        </div>
        {kind != "live" &&
          <div className="flex flex-col h-fit p-2">
            <h5 className="truncate">
              {courseName}
            </h5>
            <span className="">{hostName}</span>
            <span className="">{destination}</span>
            <div className="flex flex-row gap-1 items-center mt-2">
              <Image
                src={svgUrl}
                width="24"
                height="24"
                alt="ICON"
              />
              <span className="">{artisanName}</span>
              <span className=" ml-[2rem] text-600 text-gray-900">${price} USD</span>
            </div>

            {kind == "online" &&
              <>
                <div className="flex flex-row gap-10">
                  <span>episode {episode}</span>
                  <span>duration {duration}</span>
                </div>
                <div className="flex flex-row gap-3">
                  {categories && categories.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
              </>
            }
          </div>
        }
      </div>
    </a>
  );
};
