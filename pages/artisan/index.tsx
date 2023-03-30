import {ArtisanDashboardPage} from "@/src/components/artisan";
import { DefaultLayout } from "@/src/components/layout/default";
import { NextPage } from "next";

const Course: NextPage = () => {
  return (
    <DefaultLayout>
      <ArtisanDashboardPage />
    </DefaultLayout>
  );
};

export default Course