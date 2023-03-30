import {UserDashboardPage} from "@/src/components/user/dashboard";
import { DefaultLayout } from "@/src/components/layout/default";
import { NextPage } from "next";

const UserDashboard: NextPage = () => {
  return (
    <DefaultLayout>
      <UserDashboardPage />
    </DefaultLayout>
  );
};

export default UserDashboard