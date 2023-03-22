import { courseInfo } from "@/src/functions";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";

import {
  Wrapper,
  CourseContainer,
  Container,
  CourseDetail,
} from "../../ui";
  
export function CourseDetailPage() {
  const t = useTranslations("user.course");
  const { courses } = useSelector((state:any) => state.courseSlice)
  return (
    <>
      <Wrapper>
        <Container className="w-full mx-auto">
          <CourseDetail url="/image/card/5043-original.jpg" />
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
    </>
  );
}
