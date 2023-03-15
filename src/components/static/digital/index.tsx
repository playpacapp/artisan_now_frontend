import { FC } from "react";
import { useTranslations } from "next-intl";

import {
  ImageContent,
  SocialLink,
  Input,
  Button,
  ImageCard,
  ImageButton,
  Wrapper,
} from "../../ui";

export default function DigitalPage() {
  const t = useTranslations("host.digital");

  const parts = [
    {
      url: "/image/digital/how_to/MUESTRA-10.png",
      description: "how-to.part-1",
    },
    {
      url: "/image/digital/how_to/MUESTRA-14.png",
      description: "how-to.part-2",
    },
    {
      url: "/image/digital/how_to/MUESTRA-09.png",
      description: "how-to.part-3",
    },
  ];

  return (
    <>
      <Wrapper>
        <div className="w-full px-10 py-10 flex justify-center">
          <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
            {t("title")}
          </h1>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="w-full h-[50vh] bg-[url('/image/digital/creadora_digital.jpg')] bg-cover bg-center bg-no-repeat"></div>
      </Wrapper>

      <Wrapper>
        <div className="w-full px-10 py-10 grid grid-cols-1 items-start md:grid-cols-2 gap-4 place-content-stretch">
          <div className="w-full lg:px-10 lg:py-10 sm:px-5 sm:py-10">
            <h1 className="text-center text-2xl font-bold text-gray-800 2xl:px-20">
              {t("block.left.title")}
            </h1>
            <p className="text-justify py-5 text-xl text-gray-500 lg:text-xl xl:text-2xl">
              {t("block.left.content")}
            </p>
          </div>
          <div className="lg:px-10 lg:py-10 sm:px-5 sm:py-10">
            <h1 className="text-center text-2xl font-bold text-gray-800 2xl:px-20">
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
        <div className="w-full flex flex-col px-10 py-10 flex items-center justify-center">
          <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
            {t("how-to.title")}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-center gap-6">
            {parts.map((item, key) => {
              return (
                <>
                  <ImageContent
                    url={item.url}
                    size={128}
                    key={key}
                    label={t(item.description)}
                  />
                </>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
}
