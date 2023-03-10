import { useTranslations } from "next-intl";
import { Container } from "../../ui/Container";
import { RiSearchLine } from "react-icons/ri";

import {
  ImageContent,
  SocialLink,
  Input,
  Button,
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
              <Button label={t("buttons.experiences")} />
              <Button label={t("buttons.online-experiences")} />
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <Container>
          <div className="">
            <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight mb-10">
              {t("how-work.title")}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-center gap-6">
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
        <Container className="bg-brown-50">
          <div className="px-10 py-10 w-[90%]">
            <h1 className="text-left text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
              {t("vision.title")}
            </h1>
            <p className="text-left md py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
              {t("vision.content-1")}
            </p>
            <p className="text-left py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
              {t("vision.content-2")}
            </p>
            <div className="flex justify-left">
              <Button className="" label={t("buttons.learn-more")} />
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
        <Container className="bg-brown-50">
          <div className="w-full flex flex-wrap">
            <div className="w-full mb-10">
              <Input
                className="w-full md:w-3/4 mx-auto"
                type="text"
                placeholder="Search"
                icon={RiSearchLine}
              />
            </div>
            <CourseContainer />
          </div>
        </Container>
      </Wrapper>

      <Wrapper>
        <Container>
          <div className="w-full flex flex-wrap gap-10 md:gap-20 justify-center items-start">
            <div className="w-fit flex flex-col">
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
            <div className="w-fit flex flex-col">
              <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
                {t("dont-miss.title")}
              </h1>
              <p className="text-center py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
                {t("dont-miss.content")}
              </p>
              <div className="flex justify-center">
                <Input
                  className="w-3/4"
                  type="mail"
                  placeholder={t("dont-miss.placeholder")}
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
