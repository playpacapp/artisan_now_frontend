import { DefaultLayout } from "@/src/components/layout/default";
import { ManageExPage } from "@/src/components/artisan";
import { NextPage } from "next";

const Manage: NextPage = () => {
  return (
    <DefaultLayout>
      <ManageExPage />
    </DefaultLayout>
  );
};

export default Manage