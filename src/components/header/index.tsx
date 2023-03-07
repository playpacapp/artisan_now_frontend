/* eslint-disable @next/next/no-html-link-for-pages */
import ReactCountryFlag from "react-country-flag";
import ReactFlagsSelect from "react-flags-select";

import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  UserCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Wrapper } from "../ui";
import { useTranslations } from "next-intl";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";



const Header = () => {
  const [selected, setSelected] = useState("");
  const t = useTranslations("header");
  return (
    <Wrapper className="">
      <header className="relative top-0">
        <div className="w-full border-b bg-white">
          <div className="flex w-full h-full justify-content items-center relative px-10 py-5">
            <div className="Logo">
              <Logo link="/" />
            </div>
            <nav className="ml-auto flex items-center lg:space-x-6 space-x-2">
              <NavMenu/>
            </nav>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
