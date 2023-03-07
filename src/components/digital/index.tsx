import { FC } from "react";
import { useTranslations } from "next-intl";

import {
  ImageContent,
  SocialLink,
  IconInput,
  DefaultButton,
  ImageCard,
  ImageButton,
  Wrapper,
} from "../../components/ui/index";

export default function DigitalPage() {
  const t = useTranslations("digital");

  return (
    <>
      <Wrapper>
        <div className="w-full px-10 py-10 flex">
          <div className="w-full lg:px-10 lg:py-20 sm:px-5 sm:py-10">
            <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
              {t("title")}
            </h1>
            <div className="h-10"></div>
            <div className="w-full h-[40vh] bg-[url('/image/digital/creadora_digital.jpg')] bg-cover bg-center bg-no-repeat">
              fkowej
            </div>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <div className="w-full px-10 py-10 grid grid-cols-2 gap-4 place-content-stretch">
          <div className="w-full lg:px-10 lg:py-10 sm:px-5 sm:py-10">
            <h1 className="text-center text-2xl font-bold text-gray-800">
              {t("block.left.title")}
            </h1>
            <p className="text-justify py-5 text-xl text-gray-500 lg:text-xl xl:text-2xl">
              {t("block.left.content")}
            </p>
          </div>
          <div className="lg:px-10 lg:py-10 sm:px-5 sm:py-10">
            <h1 className="text-center text-2xl font-bold text-gray-800">
              {t("block.right.title")}
            </h1>
            <p className="text-justify py-5 text-xl text-gray-500 lg:text-xl xl:text-2xl">
              {t("block.right.content-1")}
            </p>
            <p className="text-justify py-5 text-xl text-gray-500 lg:text-xl xl:text-2xl">
              {t("block.right.content-2")}
            </p>
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <div className="w-full px-10 py-10">
          <h1 className="w-full text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
            {t("how-to.title")}
          </h1>
          <div className="w-full flex flex-col items-start justify-center lg:px-10 lg:py-20 sm:px-5 sm:py-10">
            <ImageButton
              url="/image/digital/how_to/MUESTRA-10.png"
              size={96}
              label={t("how-to.part-1")}
            />
            <ImageButton
              url="/image/digital/how_to/MUESTRA-14.png"
              size={96}
              label={t("how-to.part-2")}
            />
            <ImageButton
              url="/image/digital/how_to/MUESTRA-09.png"
              size={96}
              label={t("how-to.part-3")}
            />            
          </div>
          <div className="flex justify-center space-x-6">
              <DefaultButton className="rounded-md" url="" target="" label={t("buttons.are-you-in")} />
            </div>
        </div>
      </Wrapper>
    </>
  );
}