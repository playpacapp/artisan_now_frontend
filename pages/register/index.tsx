import { RegisterPage } from "@/src/components/auth";
import { NextPage } from "next";

const Register: NextPage = () => {
  return <RegisterPage />;
};

export default Register;

export async function getStaticProps(locale: string) {
  return {
    props: {
      messages: (await import(`@/message/en-Us.json`)).default,
    },
  };
}
