import { useTranslations } from "next-intl";

import { Wrapper, CourseContainer } from "../../ui/index";

export function OnlineExPage() {
  const t = useTranslations("user.online");
  return (
    <>   
      <Wrapper>
        <h1 className="w-full subtitle">
          {t('subtitle.my-online-experiences')}
        </h1>
        <CourseContainer/>
      </Wrapper>
      <Wrapper>
        <h1 className="w-full subtitle">
        {t('subtitle.recommended-for-you')}
        </h1>
        <CourseContainer />
      </Wrapper>
      <Wrapper>
        <h1 className="w-full subtitle">
        {t('subtitle.upcoming-live-experiences')}
        </h1>
        <CourseContainer />
      </Wrapper>
    </>
  );
}
