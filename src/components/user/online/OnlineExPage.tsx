import { useTranslations } from "next-intl";

import { Wrapper, CourseContainer, Container } from "../../ui";

export function OnlineExPage() {
  const t = useTranslations("user.online");
  return (
    <>
      <Wrapper>
        <Container>
          <h3 className="w-full subtitle">
            {t("subtitle.my-online-experiences")}
          </h3>
          <CourseContainer />
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <h3 className="w-full subtitle">
            {t("subtitle.recommended-for-you")}
          </h3>
          <CourseContainer />
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <h3 className="w-full subtitle">
            {t("subtitle.upcoming-live-experiences")}
          </h3>
          <CourseContainer />
        </Container>
      </Wrapper>
    </>
  );
}
