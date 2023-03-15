/* eslint-disable @next/next/no-html-link-for-pages */
import { userState } from "@/src/functions";
import { FC } from "react";
import { useSelector } from "react-redux";

interface DropdownItem {
  name: string;
  link: string;
}

const dropdownItems: DropdownItem[] = [
  { name: "Messages", link: "" },
  { name: "Online Experiences", link: "" },
  { name: "Trips", link: "/digital" },
  { name: "Favorites List", link: "/contact" },
  { name: "Manage Experiences", link: "/contact" },
  { name: "Account Settings", link: "/contact" },
  { name: "Logout", link: "/" },
];

export const UserMenu: FC = () => {

  const authUser = useSelector((state: userState) => state.authentication);
  
  if (!authUser.loggedIn || authUser.user?.permission !== "user") {
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
            <a href={link} className="block font-semibold text-gray-900">
              {name}
              <span className="absolute inset-0" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
