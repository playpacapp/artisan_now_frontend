import React, { FC } from "react";
import Image from "next/image";

import corfoImage from "../../public/logo-corfo-sin-fondo-300x160.png";
import fomentoImage from "../../public/logo-fomento-los-rios-sin-fondo-300x160.png";
import marcaImage from "../../public/logo-marca-chile-sin-fondo-300x160.png";

const PageLink: FC<{ url: string; label: string }> = ({ url, label }) => {
  return (
    <a
      href="${url}"
      className="block text-base font-semibold  text-gray-800 hover:text-orange-600 leading-4 mt-6"
    >
      {label}
    </a>
  );
};

const ImageLink: FC<{url:string; label:string}> = ({url, label}) => {
  return (
    <div className="flex items-center">
      <Image
        src={url}
        blurDataURL={url}
        width={80}
        height={43}
        alt={label}
        loading="eager"
        placeholder="blur"
      />
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <div className="mx-auto w-full py-16 xl:px-20 lg:px-12 sm:px-6 px-4 bg-orange-100">
        <div className="flex flex-wrap justify-between">
          <div>
            <h1 className="text-base font-semibold leading-4 mb-10 text-gray-600 w-full">
              Suported By
            </h1>
            <div className="flex flex-row flex-shrink-0 gap-x-6">
              <ImageLink url="/image/logo/logo-corfo.png" label="Corfo" />
              <ImageLink url="/image/logo/logo-fomento.png" label="fomento" />
              <ImageLink url="/image/logo/logo-marca.png" label="Marca" />
            </div>
          </div>

          <div>
            <PageLink url="" label="About Us" />
            <PageLink url="" label="Destination" />
            <PageLink url="" label="Experiences Online" />
          </div>
          <div>
            <PageLink url="" label="FAQ" />
            <PageLink url="" label="Contact" />
            <PageLink url="" label="News" />
          </div>
          <div>
            <PageLink url="" label="Terms of Service" />
            <PageLink url="" label="Privacy Policy" />
            <PageLink url="" label="" />
          </div>
        </div>
      </div>
      <div className="mx-auto w-full py-8 xl:px-10 lg:px-12 sm:px-6 px-4 text-center bg-orange-300 border-t-1">
        <span className="text-gray-600 text-center">
          All rights
          reserved&nbsp;&nbsp;&nbsp;&nbsp;Copyright&nbsp;©&nbsp;2023&nbsp;&nbsp;artisanNow
        </span>
      </div>
    </>
  );
};

export default Footer;
