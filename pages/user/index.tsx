import {UserDashboardPage} from "@/src/components/user/dashboard";
import { DefaultLayout } from "@/src/components/layout/default";
import { NextPage } from "next";

const Course: NextPage = () => {
  return (
    <DefaultLayout>
      <UserDashboardPage />
    </DefaultLayout>
  );
};

export default Course