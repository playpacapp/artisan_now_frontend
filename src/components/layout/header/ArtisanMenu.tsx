/* eslint-disable @next/next/no-html-link-for-pages */
import { artisanManageUrl, artisanMessagesUrl, artisanSettingUrl, artisanToUserUrl, artisanTransactionUrl, AuthState, DropdownItem, logoutUrl, userState, VAR_STR_ARTISAN } from "@/src/functions";
import { homeUrl } from "@/src/functions";
import { authSelector } from "@/src/store";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { useSelector } from "react-redux";
import { PageLink } from "../../ui/PageLink";



export const ArtisanMenu: FC = (state) => {
  const t = useTranslations("menu");

  const dropdownItems: DropdownItem[] = [
    { name: t("messages"), link: artisanMessagesUrl },
    { name: t("artisan.manage"), link: artisanManageUrl },
    { name: t("artisan.transaction"), link: artisanTransactionUrl },
    { name: t("setting"), link: artisanSettingUrl },
    { name: t("artisan.usermode"), link: artisanToUserUrl },
    { name: t("logout"), link: logoutUrl },
  ];

  const auth: AuthState = useSelector((state: any) => state.auth);
  
  if (!auth.loggedIn || auth.role !== VAR_STR_ARTISAN ) {
    return null;
  }

  return (
    <div className="">
      {dropdownItems.map(({ name, link }) => (
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
