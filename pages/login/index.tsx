import LoginPage from "@/src/components/auth/login";
import { DefaultLayout } from "@/src/components/layout/default";
import { NextPage } from "next";

const Login: NextPage = () => {

  

  return (
    <DefaultLayout>
      <LoginPage />
    </DefaultLayout>
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
