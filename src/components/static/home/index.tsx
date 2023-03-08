import { useTranslations } from "next-intl";
import { Container } from "../../ui/Container";

import {
  ImageContent,
  SocialLink,
  IconInput,
  DefaultButton,
  ImageCard,
  Wrapper,
  CategoriesBar,
  CourseContainer,
} from "../../ui/index";

const HomeContent = () => {
  const t = useTranslations("home");
  return (
    <>
      <Wrapper className="inset-0 p-0">
        <div className="w-full h-[100vh] p-0 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="block sticky left-[50%] top-[30%] lg:px-10 lg:py-20 sm:px-5 sm:py-10">
            <h1 className="text-center text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              {t("hero-title")}
            </h1>
            <p className="text-center py-5 text-xl leading-normal text-white lg:text-xl xl:text-2xl">
              {t("hero-description")}
            </p>
            <div className="flex justify-center space-x-6 mt-20">
              <DefaultButton label={t("buttons.experiences")} />
              <DefaultButton label={t("buttons.online-experiences")} />
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <Container>
          <div className="">
            <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
              {t("how-work.title")}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-6">
              <ImageContent
                url="/image/home/world.png"
                size={128}
                label={t("how-work.content-1")}
              />
              <ImageContent
                url="/image/home/phone.png"
                size={128}
                label={t("how-work.content-2")}
              />
              <ImageContent
                url="/image/home/heart.png"
                size={128}
                label={t("how-work.content-3")}
              />
            </div>
          </div>
        </Container>
      </Wrapper>

      <Wrapper>
        <Container className="bg-brown-100">
          <div className="">
            <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
              {t("vision.title")}
            </h1>
            <p className="text-center py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
              {t("vision.content-1")}
            </p>
            <p className="text-center py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
              {t("vision.content-2")}
            </p>
            <div className="flex justify-center space-x-6">
              <DefaultButton className="" label={t("buttons.learn-more")} />
            </div>
          </div>
        </Container>
      </Wrapper>

      <Wrapper>
        <Container>
          <CategoriesBar />
        </Container>
      </Wrapper>

      <Wrapper>
        <Container  className="bg-brown-100">
          <div className="w-full flex flex-wrap">
            <div className="w-full mb-10">
              <IconInput
                className="w-full md:w-3/4 mx-auto"
                type="text"
                placeholder="Search"
                path="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"
              />
            </div>
            <CourseContainer />
          </div>
        </Container>
      </Wrapper>

      <Wrapper>
        <Container>
          <div className="w-full flex flex-wrap gap-10">
            <div className="w-full flex flex-col">
              <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                {t("travel-with-us.title")}
              </h1>
              <p className="text-center py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                {t("travel-with-us.content")}
              </p>
              <div className="flex justify-center space-x-6">
                <SocialLink
                  href="https://www.linkedin.com/company/artisannow/"
                  url="/image/home/follow/linkedin.png"
                  label="linkedin"
                />
                <SocialLink
                  href="https://www.tiktok.com/@artisannow"
                  url="/image/home/follow/tiktok.png"
                  label="tiktok"
                />
                <SocialLink
                  href="https://www.instagram.com/artisannow/?igshid=YmMyMTA2M2Y%3D"
                  url="/image/home/follow/ig.png"
                  label="ig"
                />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                {t("dont-miss.title")}
              </h1>
              <p className="text-center py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                {t("dont-miss.content")}
              </p>
              <div className="flex justify-center">
                <IconInput
                  className="w-3/4"
                  type="mail"
                  placeholder={t("dont-miss.placeholder")}
                  path="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default HomeContent;
