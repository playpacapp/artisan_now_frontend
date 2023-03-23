import { courseInfo } from "@/src/functions";
import { useTranslations } from "next-intl";
import { RiSearchLine } from "react-icons/ri";
import { useSelector } from "react-redux";

import {
  Input,
  Wrapper,
  CategoriesBar,
  CourseContainer,
  Container,
  TouristContainer,
  LiveCourseContainer,
} from "../../ui";

const touristes: courseInfo[] = [{
  imageUrl: "/fiowjfow.jpg",
  courseName: "Tourist Name",
  destination: "destination, Chile"
}]

export function UserDashboardPage() {
  const t = useTranslations("user.course");
  const { courses } = useSelector((state:any) => state.courseSlice)
  return (
    <>
      <Wrapper>
        <Container className="w-full items-start justify-center mx-auto py-2 md:py-5">
          <CategoriesBar />
        </Container>
      </Wrapper>
      <Wrapper>
        <Container className="flex w-full items-center justify-center mx-auto pb-2 md:pb-5">
          <Input
            className="w-3/4"
            type="text"
            placeholder="Search"
            icon={RiSearchLine}
          />
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <h3 className="w-full subtitle">
            {t("subtitle.online-experiences")}
          </h3>
          <CourseContainer courses={courses}/>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <h3 className="w-full subtitle">{t("subtitle.experiences")}</h3>
          <TouristContainer courses={courses}/>
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
