import { useTranslations } from "next-intl";

import { IconInput, ImageCard, Wrapper, CategoriesBar } from "../ui/index";

export default function CoursePage() {
  const t = useTranslations("course");
  return (
    <>
      <Wrapper>
        <div className="w-full items-start justify-center mx-auto px-5 md:px-10 py-2 md:py-5">
          <CategoriesBar />
        </div>
      </Wrapper>
      <Wrapper>
        <div className="flex w-full items-center justify-center mx-auto px-5 md:px-10 pb-2 md:pb-5">
          <IconInput
            className="w-3/4"
            type="text"
            placeholder="Search"
            path="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"
          />
        </div>
      </Wrapper>
      <Wrapper>
        <h1 className="w-full text-xl text-600 px-5 md:px-10 my-5 pt-5 border-b">
          {t('subtitle.online-experiences')}
        </h1>
        <div className="w-full grid place-items-stretch grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-5 mx-auto px-5 md:px-10 pb-2 md:pb-5">
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
        </div>
      </Wrapper>
      <Wrapper>
        <h1 className="w-full text-xl text-600 px-5 md:px-10 my-5 pt-5 border-b">
        {t('subtitle.experiences')}
        </h1>
        <div className="w-full grid place-items-stretch grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-5 mx-auto px-5 md:px-10 pb-2 md:pb-5">
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
        </div>
      </Wrapper>
      <Wrapper>
        <h1 className="w-full text-xl text-600 px-5 md:px-10 my-5 pt-5 border-b">
        {t('subtitle.artisan-channel')}
        </h1>
        <div className="w-full grid place-items-stretch grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-5 mx-auto px-5 md:px-10 pb-2 md:pb-5">
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
        </div>
      </Wrapper>
    </>
  );
}
