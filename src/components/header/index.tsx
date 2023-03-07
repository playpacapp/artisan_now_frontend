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

const lang = [
  { lang: "US", country: "US"},
  { lang: "ES", country: "Chile"},
];

const avartas = [
  { name: "Login"},
  { name: "Register"},
  { name: "Join as a digital creator"},
  { name: "Contact us"},
];

const Header = () => {
  const [selected, setSelected] = useState("");
  const t = useTranslations("header");
  return (
    <Wrapper className="relative">
      <nav className="w-full absolute fixed z-[999] border-b bg-white">
        <div className="w-full sm:grid sm:auto-cols-auto sm:grid-cols-3 px-10 py-5">
          <a href="/" className="flex-none items-center">
            <img
              src={"/Logo.png"}
              className="h-6 mr-3 sm:h-9"
              alt="artisanNow Logo"
            />
          </a>
          <div></div>
          <div className="ml-auto flex items-center lg:space-x-6 md:space-x-2">
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a
                href="/digital"
                className="text-sm font-medium text-gray-700 hover:text-brown-600"
              >
                {t('digital-creator')}
              </a>
              <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
            </div>

            <Popover.Group className="lg:flex lg:gap-x-12">
              <Popover className="relative">
                <Popover.Button className="px-2 py-1 flex items-center gap-x-2 text-sm font-semibold leading-6 text-gray-900 hover:text-gray-900 hover:bg-brown-100">
                  <ReactCountryFlag
                    countryCode="US"
                    svg
                    style={{ width: "1em", height: "1em" }}
                    title="US"
                  />
                  En
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute px-0 py-0 -left-8 top-full z-10 mt-3 overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 border">
                    <div className="py-2">
                      {lang.map((item) => (
                        <div
                          key={item.lang}
                          className="group relative flex items-center gap-x-3 py-2 text-sm leading-3 hover:bg-brown-100"
                        >
                          <div className="flex h-5 w-5 ml-2 flex-none items-center justify-center">
                            <ReactCountryFlag
                              countryCode={item.lang}
                              svg
                              style={{ width: "1em", height: "1em" }}
                              title={item.lang}
                            />
                          </div>
                          <div className="flex-auto  px-2 ">
                            <a
                              href=""
                              className="block font-semibold text-gray-900"
                            >
                              {item.country}
                              <span className="absolute inset-0" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </Popover.Group>

            <Popover.Group className="lg:flex lg:gap-x-12">
              <Popover className="relative">
                <Popover.Button className="flex lg:space-x-1 ml:space-x-1 px-2 py-1 rounded-3xl border-2 border-gray-500 cursor-pointer hover:border-brown-600 hover:bg-brown-100">
                  <div className="flex items-center justify-between">
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-between">
                    <UserCircleIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                    <div className="absolute inline-flex items-center justify-center w-3 h-3 bg-red-500 border-2 border-white rounded-full top-2 right-2"></div>
                  </div>
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute px-0 py-0 -left-8 top-full z-10 mt-3 overflow-hidden bg-white shadow-lg">
                    <div className="py-2">
                      {avartas.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-3 py-3 text-sm leading-3 hover:bg-brown-100"
                        >
                          <div className="flex-auto px-3 ">
                            <a
                              href=""
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </Popover.Group>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Header;
