import { useTranslations } from "next-intl";
import courses from "@/public/course.json"
import {
  Wrapper,
  CourseContainer,
  Container,
  CourseDetail,
} from "../../ui";
  
export function TouristDetailPage() {
  const t = useTranslations("user.course");
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
