import { DefaultLayout } from "@/src/components/layout/default";
import { ManageExPage } from "@/src/components/user";
import { NextPage } from "next";

const Manage: NextPage = () => {
  return (
    <DefaultLayout>
      <ManageExPage />
    </DefaultLayout>
  );
};

export default Manage