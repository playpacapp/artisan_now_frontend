import { DefaultLayout } from "@/src/components/layout/default";
import { AccountPage } from "@/src/components/artisan";
import { NextPage } from "next";

const Account: NextPage = () => {



  return (
    <DefaultLayout>
      <AccountPage />
    </DefaultLayout>
  );
};

export default Account