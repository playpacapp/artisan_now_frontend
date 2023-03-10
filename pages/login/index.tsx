import {LoginPage} from "@/src/components/auth";
import { store } from "@/src/store";
import { NextPage } from "next";
import { Provider } from "react-redux";

const Login: NextPage = () => {
  return (
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
};

export default Login;

export async function getStaticProps(locale: string) {
  return {
    props: {
      messages: (await import(`@/message/en-Us.json`)).default,
    },
  };
}
