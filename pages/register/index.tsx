import RegisterPage from "@/src/components/auth/register";
import { DefaultLayout } from "@/src/components/layout/default";
import { NextPage } from "next";

const Register: NextPage = () => {
  return (
      <RegisterPage />
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
