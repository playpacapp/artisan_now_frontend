import {RegisterPage} from "@/src/components/auth";
import { DefaultLayout } from "@/src/components/layout/default";
import { NextPage } from "next";
import { Provider } from "react-redux";
import { store } from "@/src/store";

const Register: NextPage = () => {
  return (
    <Provider store={store}>
      <RegisterPage />
    </Provider>
  );
};

export default Register;

export async function getStaticProps(locale: string) {
  return {
    props: {
      messages: (await import(`@/message/en-Us.json`)).default,
    },
  };
}
