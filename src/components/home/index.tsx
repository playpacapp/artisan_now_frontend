import { FC } from "react";

import { ArrowRightIcon, HomeModernIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Image from "next/image";

import {
  ImageContent,
  SocialLink,
  IconInput,
  DefaultButton,
  ImageCard,
  ImageButton,
  Wrapper,
} from "../../components/ui/index";

function HomeContent() {
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
            <div className="flex justify-center space-x-6">
              <DefaultButton
                url=""
                target=""
                label={t("buttons.experiences")}
              />
              <DefaultButton
                url=""
                target=""
                label={t("buttons.online-experiences")}
              />
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <div className="w-full px-10 py-10 flex items-center justify-center">
          <div className="lg:px-10 lg:py-20 sm:px-5 sm:py-10">
            <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
              {t("how-work.title")}
            </h1>
            <div className="flex flex-cols items-center justify-center gap-6">
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
        </div>
      </Wrapper>

      <Wrapper>
        <div className="w-full px-10 py-10 bg-brown-100">
          <div className="lg:px-10 lg:py-20 sm:px-5 sm:py-10">
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
              <DefaultButton
                className="rounded-md"
                url=""
                target=""
                label={t("buttons.learn-more")}
              />
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <div className="w-full px-10 py-10 flex flex-cols items-center justify-center">
          <ImageButton
            url="/image/home/categories/experiences.png"
            size={96}
            label={t("categories.experiences")}
          />
          <ImageButton
            url="/image/home/categories/online_experiences.png"
            size={96}
            label={t("categories.online-experiences")}
          />
          <ImageButton
            url="/image/home/categories/wool.png"
            size={96}
            label={t("categories.wool")}
          />
          <ImageButton
            url="/image/home/categories/naturally_dyed.png"
            size={96}
            label={t("categories.naturally-dyed")}
          />
          <ImageButton
            url="/image/home/categories/natural_cosmetics.png"
            size={96}
            label={t("categories.natural-cosmetics")}
          />
          <ImageButton
            url="/image/home/categories/vegetal_fibers.png"
            size={96}
            label={t("categories.vegetal-fibers")}
          />
        </div>
      </Wrapper>

      <Wrapper>
        <div className="flex flex-wrap w-full px-10 py-10">
          <div className="flex w-full items-center justify-center mx-auto">
            <IconInput
              className="w-3/4"
              type="text"
              placeholder="Search"
              path="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"
            />
          </div>
          <div className="w-full grid grid-cols-4 gap-10 items-center justify-center px-10 py-10">
            <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
            <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
            <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
            <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
            <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
            <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
            <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
            <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <div className="w-full px-10 py-10 flex items-center justify-center">
          <div className="items-center justify-center lg:px-10 lg:py-20 sm:px-5 sm:py-10">
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
          <div className="items-center justify-center lg:px-10 lg:py-20 sm:px-5 sm:py-10">
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
      </Wrapper>
    </>
  );
}

export default HomeContent;
