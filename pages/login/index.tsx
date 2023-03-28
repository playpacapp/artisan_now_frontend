import { LoginPage } from "@/src/components/auth";
import { Header } from "@/src/components/layout/header";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <>
      <Header />
      <LoginPage />
    </>
  )

};

export default Login;