import { homeUrl } from "@/src/functions";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";
import { Wrapper } from "./Wrapper";

export const Copyright: FC = (props: any) => {
  const t = useTranslations("footer");
  return (
    <div className="absolute h-[8vmax] lg:h-[5vmax] bottom-0 border-t px-5 py-3 w-full bg-white flex items-center justify-center">
      <p
        className="text-sm"
        {...props}
      >
        {t("copyright")}
        <Link href={homeUrl} className="text-400">ArtisanNow</Link> {new Date().getFullYear()}
        {"."}
      </p>
    </div>
  );
}