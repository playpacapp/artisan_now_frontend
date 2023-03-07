import React, { FC } from "react";
import Image from "next/image";

import { Wrapper } from "../ui";
import { useTranslations } from "next-intl";


const PageLink: FC<{ url: string; label: string }> = ({ url, label }) => {
  return (
    <a
      href={url}
      className="block text-base font-semibold  text-gray-800 hover:text-brown-600 leading-4 mt-6"
    >
      {label}
    </a>
  );
};

const ImageLink: FC<{url:string; width?:number; height?:number; label:string}> = ({url, width=80, height=43, label}) => {
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
      <div className="w-full flex bg-brown-100 px-20 py-10">
        <div className="w-full flex flex-rows justify-between">
          <div>
            <h1 className="text-base font-semibold leading-4 mb-10 text-gray-600 w-full">
              {t('supported-by')}
            </h1>
            <div className="flex flex-row flex-shrink-0 gap-x-6">
              <ImageLink url="/image/footer/logo-corfo.png" width={150} height={76} label="Corfo" />
              <ImageLink url="/image/footer/logo-marca.png" width={150} height={76} label="Marca" />
            </div>
          </div>

          <div>
            <PageLink url="" label={t('menu.experiences')} />
            <PageLink url="" label={t('menu.online-experiences')} />
            <PageLink url="" label={t('menu.solidarity')} />
            <PageLink url="/commitment" label={t('menu.commitment')} />
          </div>
          <div>
            <PageLink url="/faq" label={t('menu.faq')} />
            <PageLink url="/news" label={t('menu.news')} />
            <PageLink url="/contact" label={t('menu.contact')} />
            <PageLink url="" label="" />
          </div>
          <div>
            <PageLink url="/terms" label={t('menu.terms')} />
            <PageLink url="/privacy" label={t('menu.privacy')} />
            <PageLink url="" label="" />
            <PageLink url="" label="" />
          </div>
        </div>
      </div>
      <div className="mx-auto w-full py-8 xl:px-10 lg:px-12 sm:px-6 px-4 text-center bg-brown-300 border-t-1">
        <span className="text-gray-600 text-center">
          {t('copyright')}
        </span>
      </div>
    </Wrapper>
  );
};

export default Footer;
