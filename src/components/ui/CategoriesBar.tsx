import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";
import { ImageButton } from "./ImageButton";

export const CategoriesBar: FC = () => {
  const t = useTranslations("home");

  return (
    <div className="grid grid-cols-6 items-start ">
      <ImageButton
        url="/image/home/categories/experiences.png"
        size={96}
        label={t("categories.experiences")}
      />
      <ImageButton
        url="/image/home/categories/online_experiences.png"
        size={96}
        label={t("categories.online-experiences")}
      />
      <ImageButton
        url="/image/home/categories/wool.png"
        size={96}
        label={t("categories.wool")}
      />
      <ImageButton
        url="/image/home/categories/naturally_dyed.png"
        size={96}
        label={t("categories.naturally-dyed")}
      />
      <ImageButton
        url="/image/home/categories/natural_cosmetics.png"
        size={96}
        label={t("categories.natural-cosmetics")}
      />
      <ImageButton
        url="/image/home/categories/vegetal_fibers.png"
        size={96}
        label={t("categories.vegetal-fibers")}
      />
    </div>
  );
};
