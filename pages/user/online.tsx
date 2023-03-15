import { DefaultLayout } from "@/src/components/layout/default";
import { OnlineExPage } from "@/src/components/user";
import { NextPage } from "next";

const OnlineEx: NextPage = () => {
  return (
    <DefaultLayout>
      <OnlineExPage />
    </DefaultLayout>
  );
};

export default OnlineEx