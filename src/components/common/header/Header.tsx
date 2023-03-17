/* eslint-disable @next/next/no-html-link-for-pages */

import { useState } from "react";
import { Wrapper } from "../../ui";
import { useTranslations } from "next-intl";
import { Logo } from "../../ui/Logo";
import { NavMenu } from "./NavMenu";

export const Header = () => {
  const [selected, setSelected] = useState("");
  const t = useTranslations("header");
  return (
    <Wrapper className="">
      <header className="relative top-0">
        <div className="w-full border-b bg-white">
          <div className="flex w-full h-full justify-content items-center relative px-5 md:px-20 py-5">
            <div className="Logo">
              <Logo />
            </div>
            <div>
            </div>
            <nav className="ml-auto flex items-center lg:space-x-6 space-x-2">
              <NavMenu/>
            </nav>
          </div>
        </div>
      </header>
    </Wrapper>
  );
}
