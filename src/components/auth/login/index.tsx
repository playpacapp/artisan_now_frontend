/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { Logo } from "../../ui/Logo";
import { Button, Input, LinkButton, Wrapper } from "../../ui";
import { RiKey2Line, RiUserLine } from "react-icons/ri";
import { Copyright } from "../../ui/Copyright";

export default function LoginPage() {
  const t = useTranslations("contact");
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    router.push("/course")

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Wrapper className="flex justify-center items-center w-[100vw] h-[100vh] bg-white mx-auto">
      <form
        className="relative w-full md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[30%] flex flex-col items-center justify-center px-10 py-10 gap-y-5"
        onSubmit={handleSubmit}
      >
        <div className="w-full h-[30px] mb-5 flex justify-center">
          <Logo link="../" width={200} />
        </div>
        <h1 className="text-center text-x text-900 leading-snug tracking-tight text-gray-600 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
          Login
        </h1>
        <div className="w-full flex flex-col gap-y-5">
          <Input
            type="email"
            name="email"
            placeholder="Enter you Email"
            icon={RiUserLine}
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter Password"
            icon={RiKey2Line}
          />
        </div>
        <div className="w-full flex flex-row-reverse">
          <LinkButton
            label="Forgot Password?"
            action={() => router.push("/")}
          />
        </div>
        <div className="w-fit">
          <Button type="submit" className="w-[150px]" label="Login" />
        </div>
        <div className="w-full flex flex-wrap justify-center items-center gap-4">
          <span>Do you have not a account?</span>
          <LinkButton
            label="Create a account"
            action={() => router.push("/register")}
          />
        </div>
      </form>
      <Copyright />
    </Wrapper>
  );
}
