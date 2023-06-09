import { useTranslations } from "next-intl";
import { RiSearchLine } from "react-icons/ri";

import { Input, ImageCard, Wrapper, CategoriesBar, CourseContainer } from "../../ui/index";

export function FavoritePage() {
  const t = useTranslations("user.favorite");
  return (
    <>
      <Wrapper>
        <div className="w-full items-start justify-center mx-auto px-5 md:px-10 py-2 md:py-5">
          <h1> Favorite Page</h1>
        </div>
      </Wrapper>
    </>
  );
}
