import { useTranslations } from "next-intl";

import { Wrapper } from "../../common/ui/index";

export default function RegisterPage() {
  const t = useTranslations("contact");

  return (
    <>
      <Wrapper>
        <div className="w-full px-10 py-10">
          <div className="lg:px-10 lg:py-20 sm:px-5 sm:py-10">
            <h1 className="text-center text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
              Register PAGE
            </h1>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

