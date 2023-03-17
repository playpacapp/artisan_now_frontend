import { useTranslations } from "next-intl";
import { RiSearchLine } from "react-icons/ri";

import { Input, ImageCard, Wrapper, CategoriesBar, CourseContainer } from "../../ui/index";

export default function CoursePage() {
  const t = useTranslations("user.course");
  return (
    <>
      <Wrapper>
        <div className="w-full items-start justify-center mx-auto px-5 md:px-10 py-2 md:py-5">
          <CategoriesBar />
        </div>
      </Wrapper>
      <Wrapper>
        <div className="flex w-full items-center justify-center mx-auto px-5 md:px-10 pb-2 md:pb-5">
          <Input
            className="w-3/4"
            type="text"
            placeholder="Search"
            icon= {RiSearchLine}
          />
        </div>
      </Wrapper>
      <Wrapper>
        <h1 className="w-full subtitle">
          {t('subtitle.online-experiences')}
        </h1>
        <CourseContainer/>
      </Wrapper>
      <Wrapper>
        <h1 className="w-full subtitle">
        {t('subtitle.experiences')}
        </h1>
        <CourseContainer />
      </Wrapper>
      <Wrapper>
        <h1 className="w-full subtitle">
        {t('subtitle.artisan-channel')}
        </h1>
        <CourseContainer />
      </Wrapper>
    </>
  );
}
