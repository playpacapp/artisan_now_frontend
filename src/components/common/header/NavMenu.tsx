/* eslint-disable @next/next/no-html-link-for-pages */
import { FC, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { VscAccount, VscChevronDown, VscMenu } from "react-icons/vsc";
import { Popover, Transition } from "@headlessui/react";
import { useTranslations } from "next-intl";
import { Icon, LinkButton } from "../../ui";
import { userState, menuItemType, digitalUrl } from "@/src/functions";
import { useSelector } from "react-redux";
import { HomeMenu, UserMenu, ArtisanMenu, AdminMenu } from "../header";
import Image from "next/image";

const lang = [
  { lang: "US", country: "US" },
  { lang: "ES", country: "Chile" },
];

export const NavMenu: FC = () => {
  const t = useTranslations("header");
  const router = useRouter();

  const auth = useSelector((state: userState) => state.authentication);

  return (
    <>
      <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6">
        <LinkButton
          label={t("digital-creator")}
          action={() => router.push(digitalUrl)}
        />
        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
      </div>

      <Popover.Group className="lg:flex lg:gap-x-12">
        <Popover className="relative">
          <Popover.Button className="px-2 py-1 flex items-center gap-x-2 text-sm font-semibold rounded-3xl leading-6 text-gray-900 hover:text-gray-900 hover:bg-brown-100">
            <ReactCountryFlag
              countryCode="US"
              svg
              style={{ width: "1em", height: "1em" }}
              title="US"
            />
            En
            <Icon
              className="h-5 w-5 flex-none text-gray-400"
              icon={VscChevronDown}
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
            <Popover.Panel className="absolute px-0 py-2 right-0 top-full z-10 mt-3 overflow-hidden bg-white shadow-lg">
              <div className="">
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
                    <div className="flex-auto px-3">
                      <a href="" className="block font-semibold text-gray-900">
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
              <Icon className="block h-6 w-6" icon={VscMenu} />
            </div>
            <div className="flex items-center justify-between">
              <Icon className="block h-6 w-6" icon={VscAccount} />
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
            <Popover.Panel className="absolute w-[180px] px-0 py-2 right-0 top-full z-10 mt-3 overflow-hidden bg-white shadow-lg">
              <div className="relative group bg-gray-100 grid items-center justify-center gap-x-3 px-3 py-1 text-sm text-gray-600 border-b">
                <div className="w-full py-1">
                  <div className="text-lg text-400 text-gray-900 py-1">
                    John Ford
                  </div>
                  <p className="text-gray-400 w-[150px] whitespace-nowrap text-ellipsis overflow-hidden">
                    johnford9159@gmail.com
                  </p>
                </div>
              </div>
              <HomeMenu />
              <UserMenu />
              <ArtisanMenu />
              <AdminMenu />
            </Popover.Panel>
          </Transition>
        </Popover>
      </Popover.Group>
    </>
  );
};
