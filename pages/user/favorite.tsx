import { DefaultLayout } from "@/src/components/layout/default";
import { FavoritePage } from "@/src/components/user";
import { NextPage } from "next";

const Favorite: NextPage = () => {
  return (
    <DefaultLayout>
      <FavoritePage />
    </DefaultLayout>
  );
};

export default Favorite