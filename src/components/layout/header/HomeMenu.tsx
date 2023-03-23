
/* eslint-disable @next/next/no-html-link-for-pages */
import { contactUrl, digitalUrl, DropdownItem, loginUrl, registerUrl, userState } from "@/src/functions";
import { FC } from "react";
import { useSelector } from "react-redux";
import { PageLink } from "../../ui/PageLink";

const dropdownItems: DropdownItem[] = [
  { name: "Login", link: `${loginUrl}` },
  { name: "Register", link: `${registerUrl}` },
  { name: "Join as a digital creator", link: `${digitalUrl}` },
  { name: "Contact us", link: `${contactUrl}` },
];

export const HomeMenu: FC = () => {

  const authUser = useSelector((state: userState) => state.authentication);
  
  if (authUser.loggedIn) {
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