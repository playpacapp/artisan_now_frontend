import { DefaultLayout } from "@/src/components/layout/default";
import { SettingPage } from "@/src/components/user";
import { NextPage } from "next";

const Account: NextPage = () => {
  return (
    <DefaultLayout>
      <SettingPage />
    </DefaultLayout>
  );
};

export default Account