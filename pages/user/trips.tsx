import { DefaultLayout } from "@/src/components/layout/default";
import { TripsPage } from "@/src/components/user";
import { NextPage } from "next";

const Trips: NextPage = () => {
  return (
    <DefaultLayout>
      <TripsPage />
    </DefaultLayout>
  );
};

export default Trips