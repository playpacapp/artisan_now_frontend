import { useTranslations } from "next-intl";
import { RiSearchLine } from "react-icons/ri";

import { Input, ImageCard, Wrapper, CategoriesBar, CourseContainer } from "../../ui/index";

export function MessagesPage() {
  const t = useTranslations("course");
  return (
    <>
      <Wrapper>
        <div className="w-full items-start justify-center mx-auto px-5 md:px-10 py-2 md:py-5">
          <h1> Message Page</h1>
        </div>
      </Wrapper>
    </>
  );
}
