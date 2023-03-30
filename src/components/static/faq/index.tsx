import { useTranslations } from "next-intl";
import { FC } from "react";

import { Container, Wrapper } from "../../ui";

const FAQ: FC<{ title: string; content: string }> = ({ title, content }) => {
  const t = useTranslations("host.faq");

  return (
    <Wrapper>
      <Container>
        <div className="flex flex-wrap justify-center">
          <h1 className="">
            {t(title)}
          </h1>
          <p>
            {t(content)}
          </p>
        </div>
      </Container>
    </Wrapper>
  );
};

export default function FAQPage() {
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
