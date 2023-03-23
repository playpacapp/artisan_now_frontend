import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import ReactPlayer from 'react-player'

import {
  Wrapper,
  CourseContainer,
  Container,
  CourseDetail,
  LiveCourseContainer,
  Button,
} from "../../ui";

export function LiveDetailPage() {
  const t = useTranslations("user.course");
  const { courses } = useSelector((state: any) => state.courseSlice)
  return (
    <>
      <Wrapper>
        <Container className="w-full mx-auto aria-hidden">
          <div className="flex flex-col md:flex-row w-full gap-10 items-start">
            <div className="">
              <ReactPlayer className="rounded-3xl overflow-hidden"
                url='https://tecdn.b-cdn.net/img/video/Tropical.mp4'
                // light={true}
                loop={true}
                controls={true}
              />
            </div>
            <div className="flex flex-col">
              <h4 className="">
                Name of the Course
              </h4>
              <span className="">live chat with the artisan</span>
              <span className="">date and time</span>

              <span className="mt-2">Available languages</span>
              <span className="">price</span>

              <Button className="mt-5" label="Buy" />
            </div>
          </div>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <h3 className="w-full subtitle">{t("subtitle.artisan-channel")}</h3>
          <span className="mb-5">Próximas experiencias en artisanNowLIVE</span>
          <LiveCourseContainer courses={courses} />
        </Container>
      </Wrapper>
    </>
  );
}
