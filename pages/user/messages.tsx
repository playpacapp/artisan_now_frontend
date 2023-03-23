import { DefaultLayout } from "@/src/components/layout/default";
import { MessagesPage } from "@/src/components/user";
import { NextPage } from "next";

const Messages: NextPage = () => {
  return (
    <DefaultLayout>
      <MessagesPage />
    </DefaultLayout>
  );
};

export default Messages