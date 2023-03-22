import { FC } from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import { IoPlayCircleOutline } from "react-icons/io5"
import { RiHome4Fill } from "react-icons/ri";
import { Button } from "./Button";

type Props = {
  url: string;
  label?: string;
}

export const CourseDetail: FC<Props> = ({
  url
}) => {
  return (
      <div className="flex flex-col md:flex-row w-full gap-10 items-start course-detail">
        <div className="relative">
          <Image
            className="course-image"
            src={url}
            blurDataURL={url}
            width="640"
            height="480"
            alt="Vision"
            loading="eager"
            placeholder="blur"
          />
          <div className="absolute left-[calc(50%-24px)] top-[calc(50%-24px)]">
            <Icon className="play" icon={IoPlayCircleOutline} size={48} />
          </div>
        </div>
        <div className="flex flex-col h-fit gap-5">
          <h4 className="">
            Name of the Course
          </h4>
          <span className="">Destination and Country</span>

          <div className="flex flex-row items-center justify-left space-x-2 py-1">
            <Image
              src="/image/icon/experiences.png"
              blurDataURL={"/image/icon/experiences.png"}
              width="24"
              height="24"
              alt="ICON"
              placeholder="blur"
            />
            <span className="">Artisan name</span>
            <span className="w-full text-end">$95 USD</span>
          </div>
          <div className="flex flex-row gap-10">
            <span className="">Episode: {0}</span>
            <span className="">Total Duration: {0}</span>
          </div>
          <div className="flex flex-row gap-10">
            <span className="">categories</span>
            <span className="">categories</span>
          </div>

          <Button className="mt-5" label="Buy" />
        </div>
        
      </div>

  );
};
