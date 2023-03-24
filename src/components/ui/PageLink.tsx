import { FC } from "react";
import { artisanDashboardUrl, artisanToUserUrl, homeUrl, logoutUrl, userDashboardUrl, userToArtisanUrl, VAR_STR_ARTISAN, VAR_STR_USER } from "@/src/functions";
import { useRouter } from "next/router";

type Props = {
  className?: string;
  label: string;
  actionLink: string;
};

export const PageLink: FC<Props> = (props) => {
  const { label, actionLink = "", className } = props;
  const router = useRouter();

  const goPage = async (actionLink: string) => {
    switch (actionLink) {
      case logoutUrl:
        router.asPath !== homeUrl && router.push(homeUrl);
        break;
      case userToArtisanUrl:
        router.asPath !== artisanDashboardUrl && router.push(artisanDashboardUrl);
        break;
      case artisanToUserUrl:
        router.asPath !== userDashboardUrl && router.push(userDashboardUrl);
        break;
      default:
        //router.asPath !== actionLink && router.push(actionLink);
        location.href = actionLink;
        break;
    }
  };

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        console.log("ehre")
        goPage(actionLink);
      }}
      className={
        "block font-semibold text-gray-900 w-full text-left " + className
      }
    >
      {label}
    </button>
  );
};
