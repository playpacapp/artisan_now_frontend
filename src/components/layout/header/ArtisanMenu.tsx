/* eslint-disable @next/next/no-html-link-for-pages */
import { artisanManageUrl, artisanMessagesUrl, artisanSettingUrl, artisanToUserUrl, artisanTransactionUrl, AuthState, DropdownItem, userState, VAR_STR_ARTISAN } from "@/src/functions";
import { homeUrl } from "@/src/functions";
import { authSelector } from "@/src/store";
import { FC } from "react";
import { useSelector } from "react-redux";
import { PageLink } from "../../ui/PageLink";

const dropdownItems: DropdownItem[] = [
  { name: "Messages", link: artisanMessagesUrl },
  { name: "Manage Experiences", link: artisanManageUrl },
  { name: "Transaction History", link: artisanTransactionUrl },
  { name: "Account Settings", link: artisanSettingUrl },
  { name: "Switch to User Mode", link: artisanToUserUrl },
  { name: "Logout", link: `${homeUrl}` },
];

export const ArtisanMenu: FC = (state) => {
  
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
