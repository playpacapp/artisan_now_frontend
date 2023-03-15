import { homeUrl } from "@/src/functions";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC } from "react";

export const Copyright: FC = (props: any) => {
  const t = useTranslations("footer");
  return (
    <div className="absolute h-[10vmax] lg:h-[7vmax] bottom-0 border-t px-5 py-3 w-full bg-white flex items-center justify-center">
      <p
        className=""
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {t("copyright")}
        <Link href={homeUrl} className="text-400">ArtisanNow</Link> {new Date().getFullYear()}
        {"."}
      </p>
    </div>
  );
}