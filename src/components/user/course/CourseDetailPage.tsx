import { courseInfo } from "@/src/functions";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import Image from "next/image"

import {
  Wrapper,
  CourseContainer,
  Container,
  CourseDetail,
  Icon,
  Button,
} from "../../ui";
import { IoPlayCircleOutline } from "react-icons/io5";
import ReactPlayer from "react-player";

export function CourseDetailPage() {
  const t = useTranslations("user.course");
  const { courses } = useSelector((state: any) => state.courseSlice)
  return (
    <>
      <Wrapper>
        <Container className="w-full mx-auto">
          <div className="flex flex-col md:flex-row w-full gap-10 items-start course-detail">
            <div className="relative">
              <ReactPlayer className="rounded-3xl overflow-hidden"
                url='https://tecdn.b-cdn.net/img/video/Tropical.mp4'
                // light={true}
                loop={true}
                controls={true}
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
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <h3 className="w-full subtitle">
            {t("subtitle.online-experiences")}
          </h3>
          <CourseContainer courses={courses} />
        </Container>
      </Wrapper>
    </>
  );
}
