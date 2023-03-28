import { DefaultLayout } from "@/src/components/layout/default";
import { MessagesPage } from "@/src/components/artisan";
import { NextPage } from "next";
import { Header } from "@/src/components/layout/header";
import { Copyright } from "@/src/components/ui/Copyright";

const Messages: NextPage = () => {
  return (
    <>
      <Header />
      <MessagesPage />
      <Copyright />
    </>
  );
};

export default Messages