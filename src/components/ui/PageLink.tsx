import { FC } from "react";
import { homeUrl, logoutUrl } from "@/src/functions";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { userActions } from "@/src/store/actions";

type Props = {
  className?: string;
  label: string;
  actionLink: string;
};

export const PageLink: FC<Props> = (props) => {
  const { label, actionLink = "", className } = props;
  const router = useRouter();
  const dispatch = useDispatch()

  const goPage = async (actionLink: string) => {
    switch (actionLink) {
      case logoutUrl:
        await dispatch(userActions.logout())
        router.asPath !== homeUrl && router.push(homeUrl);
        break;
      case "":
        break;
      default:
        router.asPath !== actionLink && router.push(actionLink);
        break;
    }
  };

  return (
    <button
      type="button"
      onClick={() => goPage(actionLink)}
      className={
        "block font-semibold text-gray-900 w-full text-left " + className
      }
    >
      {label}
    </button>
  );
};
