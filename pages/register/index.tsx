import { RegisterPage } from "@/src/components/auth";
import { Header } from "@/src/components/layout/header";
import { NextPage } from "next";

const Register: NextPage = () => {
  return (
    <>
      <Header />
      <RegisterPage />
    </>
  )
};

export default Register;