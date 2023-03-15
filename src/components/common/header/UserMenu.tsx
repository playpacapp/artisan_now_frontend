/* eslint-disable @next/next/no-html-link-for-pages */
import { DropdownItem, homeUrl, logoutUrl, userState } from "@/src/functions";
import { useRouter } from "next/router";
import { FC } from "react";
import { useSelector } from "react-redux";
import { PageLink } from "../../ui/PageLink";

const dropdownItems: DropdownItem[] = [
  { name: "Messages", link: "/user/message" },
  { name: "Online Experiences", link: "user/online" },
  { name: "Trips", link: "/user/trips" },
  { name: "Favorites List", link: "/user/favorlist" },
  { name: "Manage Experiences", link: "/user/manage" },
  { name: "Account Settings", link: "/user/account" },
  { name: "Logout", link: logoutUrl },
];

export const UserMenu: FC = () => {
  const authUser = useSelector((state: userState) => state.authentication);

  const router = useRouter();

  if (!authUser.loggedIn || authUser.user?.permission !== "user") {
    return null;
  }

  return (
    <div className="">
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
    </div>
  );
};
