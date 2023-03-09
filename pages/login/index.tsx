import LoginPage from "@/src/components/auth/login";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <LoginPage />
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
