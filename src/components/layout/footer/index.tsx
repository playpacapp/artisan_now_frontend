import React, { FC } from "react";
import Image from "next/image";

import { Container, Wrapper } from "../../ui";
import { useTranslations } from "next-intl";
import { Copyright } from "../../ui/Copyright";
import { commitmentUrl, contactUrl, FAQUrl, newsUrl, privacyUrl, termsUrl } from "@/src/functions";
import { PageLink } from "../../ui/PageLink";

const ImageLink: FC<{
  url: string;
  width?: number;
  height?: number;
  label: string;
}> = ({ url, width = 80, height = 43, label }) => {
  return (
    <div className="flex items-center">
      <Image
        src={url}
        blurDataURL={url}
        width={width}
        height={height}
        alt={label}
        loading="eager"
        placeholder="blur"
      />
    </div>
  );
};

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <Wrapper>
      <div className="w-full h-[50px]"></div>
      <Container className="w-full border-t">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-20">
          <div className="w-fit flex flex-col gap-2 md:gap-4">
            <h4 className="">
              {t("supported-by")}
            </h4>
            <div className="flex flex-row gap-2 md:gap-4">
              <ImageLink
                url="/image/footer/logo-corfo.png"
                width={150}
                height={76}
                label="Corfo"
              />
              <ImageLink
                url="/image/footer/logo-marca.png"
                width={150}
                height={76}
                label="Marca"
              />
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-2 md:gap-4 justify-between lg:px-20">
            <div className="w-fit flex flex-col gap-2 md:gap-4 py-2">
              <PageLink actionLink="" label={t("menu.experiences")} />
              <PageLink actionLink="" label={t("menu.online-experiences")} />
              <PageLink actionLink="" label={t("menu.solidarity")} />
              <PageLink actionLink={commitmentUrl} label={t("menu.commitment")} />
            </div>
            <div className="w-fit flex flex-col gap-2 md:gap-4 py-2">
              <PageLink actionLink={FAQUrl} label={t("menu.faq")} />
              <PageLink actionLink={newsUrl} label={t("menu.news")} />
              <PageLink actionLink={contactUrl} label={t("menu.contact")} />
              <PageLink actionLink="" label="" />
            </div>
            <div className="w-fit flex flex-col gap-2 md:gap-4 py-2">
              <PageLink actionLink={termsUrl} label={t("menu.terms")} />
              <PageLink actionLink={privacyUrl} label={t("menu.privacy")} />
              <PageLink actionLink="" label="" />
              <PageLink actionLink="" label="" />
            </div>
          </div>
        </div>
        <div className="h-[10vmax] lg:h-[7vmax]"></div>
      </Container>      
      <Copyright/>
    </Wrapper>
  );
};

export default Footer;
