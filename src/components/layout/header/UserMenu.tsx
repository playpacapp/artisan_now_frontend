/* eslint-disable @next/next/no-html-link-for-pages */
import {
  DropdownItem,
  logoutUrl,
  userFavoriteUrl,
  userToArtisanUrl,
  userMessagesUrl,
  userOnlineUrl,
  userSettingUrl,
  userState,
  userTripsUrl,
  VAR_STR_USER,
  AuthState,
} from "@/src/functions";
import { authSelector } from "@/src/store";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { useSelector } from "react-redux";
import { PageLink } from "../../ui/PageLink";



export const UserMenu: FC = () => {
  const t = useTranslations("menu");

  const dropdownItems: DropdownItem[] = [
    { name: t("messages"), link: userMessagesUrl },
    { name: t("user.online"), link: userOnlineUrl },
    { name: t("user.trips"), link: userTripsUrl },
    { name: t("user.favorite"), link: userFavoriteUrl },
    { name: t("user.manage"), link: userToArtisanUrl },
    { name: t("setting"), link: userSettingUrl },
    { name: t("logout"), link: logoutUrl },
  ];
  
  const auth: AuthState = useSelector((state: any) => state.auth);
  
  if (!auth.loggedIn || auth.role !== VAR_STR_USER ) {
    return null;
  }

  return (
    <>
      {dropdownItems.map(({ name, link }) => {
        return (
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
        );
      })}
    </>
  );
};
