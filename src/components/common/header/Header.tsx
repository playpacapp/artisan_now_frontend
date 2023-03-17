/* eslint-disable @next/next/no-html-link-for-pages */

import { Wrapper } from "../../ui";
import { useTranslations } from "next-intl";
import { Logo } from "../../ui/Logo";
import { NavMenu } from "./NavMenu";
import { useRouter } from "next/router";
import { homeUrl } from "@/src/functions";

export const Header = () => {
  const t = useTranslations("header");
  const router = useRouter()

  return (
    <>
      <Wrapper className="">
        <header className="fixed top-0 z-20 w-full">
          <div className="w-full border-b bg-white">
            <div className="flex w-full h-full justify-content items-center relative px-5 md:px-20 py-2 md:py-4">
              <div className="Logo">
                <Logo />
              </div>
              <div></div>
              <nav className="ml-auto flex items-center lg:space-x-6 space-x-2">
                <NavMenu />
              </nav>
            </div>
          </div>
        </header>
      </Wrapper>
      {router.asPath !== homeUrl && <Wrapper className="relative">
        <div className="w-full bg-white h-[61px]">
        </div>
      </Wrapper>}
    </>
  );
};
