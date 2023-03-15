/* eslint-disable @next/next/no-html-link-for-pages */
import { digitalUrl, DropdownItem, homeUrl, userState } from "@/src/functions";
import { FC } from "react";
import { useSelector } from "react-redux";
import { PageLink } from "../../ui/PageLink";

const dropdownItems: DropdownItem[] = [
  { name: "Messages", link: "" },
  { name: "Online Experiences", link: "" },
  { name: "Trips", link: `${digitalUrl}` },
  { name: "Favorites List", link: "/contact" },
  { name: "Manage Experiences", link: "/contact" },
  { name: "Account Settings", link: "/contact" },
  { name: "Logout", link: `${homeUrl}` },
];

export const AdminMenu: FC = () => {
  const authUser = useSelector((state: userState) => state.authentication);

  if (!authUser.loggedIn || authUser.user?.permission !== "admin") {
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
