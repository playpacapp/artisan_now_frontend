import { useTranslations } from "next-intl";
import { FC } from "react";

import { DefaultButton, Wrapper } from "../../ui/index";

const FAQ: FC<{ title: string; content: string }> = ({ title, content }) => {
  const t = useTranslations("faq");

  return (
    <Wrapper>
      <div className="w-full px-10 py-10">
        <div className="w-full px-20 py-10 flex flex-wrap justify-center">
          <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
            {t(title)}
          </h1>
          <p className="text-justify py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
            {t(content)}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default function FAQPage() {
  const t = useTranslations("faq");

  return (
    <>
      <FAQ title="faq-1.title" content="faq-1.content" />
      <FAQ title="faq-2.title" content="faq-2.content" />
      <FAQ title="faq-3.title" content="faq-3.content" />
      <FAQ title="faq-4.title" content="faq-4.content" />
      <FAQ title="faq-5.title" content="faq-5.content" />
    </>
  );
}
