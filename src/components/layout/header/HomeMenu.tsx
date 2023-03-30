
/* eslint-disable @next/next/no-html-link-for-pages */
import { AuthState, contactUrl, digitalUrl, DropdownItem, loginUrl, registerUrl, userState } from "@/src/functions";
import { authSelector } from "@/src/store";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { useSelector } from "react-redux";
import { PageLink } from "../../ui/PageLink";



export const HomeMenu: FC = () => {
  const t = useTranslations("menu.home");

  const dropdownItems: DropdownItem[] = [
    { name: t("login"), link: `${loginUrl}` },
    { name: t("register"), link: `${registerUrl}` },
    { name: t("digital"), link: `${digitalUrl}` },
    { name: t("contact"), link: `${contactUrl}` },
  ];

  const auth: AuthState = useSelector((state: any) => state.auth);  
  
  if (auth.loggedIn) {
    return null;
  }

  return (
    <div className="">
      {dropdownItems.map(({name, link}) => (
        <div
          key={name}
          className={`group relative flex items-center justify-center gap-x-3 py-3 text-sm leading-3 hover:bg-brown-100  ${
            name == "Join as a digital creator" ? "md:hidden" : ""
          }`}
        >
          <div className="flex-auto px-3">
            <PageLink label={name} actionLink={link} />
          </div>
        </div>
      ))}
    </div>
  );
};
