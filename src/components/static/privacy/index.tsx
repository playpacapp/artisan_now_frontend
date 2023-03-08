import { useTranslations } from "next-intl";

import { Wrapper } from "../../ui/index";

export default function PrivacyPage() {
  const t = useTranslations("commitment");

  return (
    <>
      <Wrapper>
        <div className="w-full px-10 py-10">
          <div className="lg:px-10 lg:py-20 sm:px-5 sm:py-10">
            <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
              Privacy PAGE
            </h1>
            <p className="text-center py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
              {t("vision.content-2")}
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
