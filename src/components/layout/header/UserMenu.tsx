/* eslint-disable @next/next/no-html-link-for-pages */
import {
  DropdownItem,
  logoutUrl,
  userFavoriteUrl,
  userManageUrl,
  userMessagesUrl,
  userOnlineUrl,
  userSettingUrl,
  userState,
  userTripsUrl,
  VAR_STR_USER,
} from "@/src/functions";
import { FC } from "react";
import { useSelector } from "react-redux";
import { PageLink } from "../../ui/PageLink";

const dropdownItems: DropdownItem[] = [
  { name: "Messages", link: userMessagesUrl },
  { name: "Online Experiences", link: userOnlineUrl },
  { name: "Trips", link: userTripsUrl },
  { name: "Favorites List", link: userFavoriteUrl },
  { name: "Manage Experiences", link: userManageUrl },
  { name: "Account Settings", link: userSettingUrl },
  { name: "Logout", link: logoutUrl },
];

export const UserMenu: FC = () => {
  const authUser = useSelector((state: userState) => state.authentication);

  if (!authUser.loggedIn || !authUser.user?.currentRole.includes(VAR_STR_USER)) {
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
