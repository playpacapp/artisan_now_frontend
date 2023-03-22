import { useTranslations } from "next-intl";
import { RiSearchLine } from "react-icons/ri";

import {
  Input,
  Wrapper,
  CategoriesBar,
  CourseContainer,
  Container,
  TouristContainer,
  OnlineCourseContainer,
} from "../../ui";

export function CoursePage() {
  const t = useTranslations("user.course");
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
          <CourseContainer />
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <h3 className="w-full subtitle">{t("subtitle.experiences")}</h3>
          <TouristContainer />
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <h3 className="w-full subtitle">{t("subtitle.artisan-channel")}</h3>
          <span className="mb-5">Próximas experiencias en artisanNowLIVE</span>
          <OnlineCourseContainer />
        </Container>
      </Wrapper>
    </>
  );
}
