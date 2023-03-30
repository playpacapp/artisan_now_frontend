import { FC } from "react";
import { artisanDashboardUrl, artisanToUserUrl, homeUrl, logoutUrl, userDashboardUrl, userToArtisanUrl, VAR_STR_ARTISAN, VAR_STR_USER } from "@/src/functions";
import { useRouter } from "next/router";
import { logout, switchToRole } from "@/src/store";
import { useDispatch } from "react-redux";

type Props = {
  className?: string;
  label: string;
  actionLink: string;
};

export const PageLink: FC<Props> = (props) => {
  const { label, actionLink = "", className } = props;
  const router = useRouter();
  const dispatch = useDispatch();

  const goPage = async (actionLink: string) => {
    switch (actionLink) {
      case logoutUrl:
        dispatch(logout())
        router.asPath !== homeUrl && router.push(homeUrl);
        break;
      case userToArtisanUrl:
        dispatch(switchToRole(VAR_STR_ARTISAN))
        router.asPath !== artisanDashboardUrl && router.push(artisanDashboardUrl);
        break;
      case artisanToUserUrl:
        dispatch(switchToRole(VAR_STR_USER))
        router.asPath !== userDashboardUrl && router.push(userDashboardUrl);
        break;
      default:
        router.asPath !== actionLink && router.push(actionLink);
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
        "block font-semibold text-gray-900 w-full text-left hover:text-brown-600 focus:text-brown-900 leading-4 " + className
      }
    >
      {label}
    </button>
  );
};
