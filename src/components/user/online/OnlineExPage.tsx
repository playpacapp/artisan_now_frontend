import { courseInfo } from "@/src/functions";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";

import { Wrapper, CourseContainer, Container, LiveCourseContainer, Button } from "../../ui";

export function OnlineExPage() {
  const t = useTranslations("user.online");
  const courses: courseInfo[] = [];
  const lives= useSelector((state:any) => state.courseSlice.courses as courseInfo[]);
  return (
    <>
      <Wrapper>
        <Container>
          <h3 className="w-full subtitle">
            {t("subtitle.my-online-experiences")}
          </h3>
          {courses.length ? <CourseContainer courses={courses} /> :
            <div className="flex flex-col max-w-md">
              <h4 className="mt-10">Todavía no tienes ninguna experiencia comprada</h4>
              <span className="my-5">
                Conéctate, impacta positivamente en la economía de artesanas de Latinoamérica y aprende viviendo una experiencia auténtica 
              </span>
              <Button label="Comienza a buscar"/>
            </div>
          }
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <h3 className="w-full subtitle">
            {t("subtitle.recommended-for-you")}
          </h3>
          {lives.length ? <CourseContainer courses={lives} /> :
            <div className="flex flex-col max-w-md">
              <h4 className="mt-10">Todavía no tienes ningún LIVE comprado</h4>
              <span className="my-5">
                Comparte en vivo con artesanas Latinoamericanas desde a comodidad de tu casa
              </span>
              <Button label="Comienza a buscar"/>
            </div>
          }
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <h3 className="w-full subtitle">
            {t("subtitle.upcoming-live-experiences")}
          </h3>
          <LiveCourseContainer courses={lives} />
        </Container>
      </Wrapper>
    </>
  );
}
