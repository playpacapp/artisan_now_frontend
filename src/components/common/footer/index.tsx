import React, { FC } from "react";
import Image from "next/image";

import { Wrapper } from "../../ui";
import { useTranslations } from "next-intl";
import { Copyright } from "../../ui/Copyright";

const PageLink: FC<{ url: string; label: string }> = ({ url, label }) => {
  return (
    <a
      href={url}
      className="block text-base font-semibold  text-gray-800 hover:text-brown-600 leading-4"
    >
      {label}
    </a>
  );
};

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
      <div className="w-full bg-brown-50 px-10 py-5">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 lg:gap-20 px-10">
          <div className="w-fit flex flex-col gap-2 md:gap-4">
            <h1 className="text-base font-semibold leading-4 text-gray-600 w-full">
              {t("supported-by")}
            </h1>
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
              <PageLink url="" label={t("menu.experiences")} />
              <PageLink url="" label={t("menu.online-experiences")} />
              <PageLink url="" label={t("menu.solidarity")} />
              <PageLink url="/commitment" label={t("menu.commitment")} />
            </div>
            <div className="w-fit flex flex-col gap-2 md:gap-4 py-2">
              <PageLink url="/FAQ" label={t("menu.faq")} />
              <PageLink url="/news" label={t("menu.news")} />
              <PageLink url="/contact" label={t("menu.contact")} />
              <PageLink url="" label="" />
            </div>
            <div className="w-fit flex flex-col gap-2 md:gap-4 py-2">
              <PageLink url="/terms" label={t("menu.terms")} />
              <PageLink url="/privacy" label={t("menu.privacy")} />
              <PageLink url="" label="" />
              <PageLink url="" label="" />
            </div>
          </div>
        </div>
        <div className="h-[10vmax] lg:h-[7vmax]"></div>
      </div>      
      <Copyright/>
    </Wrapper>
  );
};

export default Footer;
