import { DefaultLayout } from "@/src/components/layout/default";
import { AccountPage } from "@/src/components/user";
import { NextPage } from "next";

const Account: NextPage = () => {
  return (
    <DefaultLayout>
      <AccountPage />
    </DefaultLayout>
  );
};

export default Account