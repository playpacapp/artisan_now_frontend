import { DefaultLayout } from "@/src/components/layout/default";
import { TransactionPage } from "@/src/components/artisan";
import { NextPage } from "next";

const Transaction: NextPage = () => {
  return (
    <DefaultLayout>
      <TransactionPage />
    </DefaultLayout>
  );
};

export default Transaction