import { FC } from "react";
import { useTranslations } from "next-intl";

import { ImageContent, Wrapper, Container } from "../../ui";

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
    <div className="digital">
      <Wrapper>
        <Container className="w-full flex justify-center">
          <h1 className="w-3/4">{t("title")}</h1>
        </Container>
      </Wrapper>
      <Wrapper>
        <div className="w-full h-[70vh] bg-[url('/image/digital/creadora_digital.jpg')] bg-cover bg-center bg-no-repeat"></div>
      </Wrapper>

      <Wrapper>
        <Container className="grid grid-cols-1 items-start md:grid-cols-2 gap-10 place-content-stretch">
          <div className="">
            <h2 className="">{t("block.left.title")}</h2>
            <p className="">{t("block.left.content")}</p>
          </div>
          <div className="">
            <h2 className="">{t("block.right.title")}</h2>
            <p className="">{t("block.right.content-1")}</p>
            <p className="">{t("block.right.content-2")}</p>
          </div>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container className="flex flex-col items-center justify-center">
          <h2 className="">{t("how-to.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-center gap-6">
            {parts.map((item, key) => {
              return (
                  <ImageContent
                    url={item.url}
                    size={128}
                    key={key}
                    label={t(item.description)}
                  />
              );
            })}
          </div>
        </Container>
      </Wrapper>
    </div>
  );
}
