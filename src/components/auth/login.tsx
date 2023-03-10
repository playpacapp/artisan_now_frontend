/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import router, { useRouter } from "next/router";
import { Logo } from "../ui/Logo";
import { Button, Input, LinkButton, Wrapper } from "../ui";
import { RiKey2Line, RiUserLine } from "react-icons/ri";
import { Copyright } from "../ui/Copyright";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { authActions } from "@/src/store"
import { useDispatch } from "react-redux";

type authPermision = "user" | "artisan" | "admin";

type userData = {
  username: string | null;
  password: string | null;
  login: boolean;
  permission: authPermision | "undefined";
};

export function LoginPage() {
  // const t = useTranslations("login");

  const dispatch = useDispatch();

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  const loginAndDispatch = (data: any) => {
    return async (dispatch: any) => {
      try {
        await dispatch(authActions.login());
        // Handle success, e.g. redirect to dashboard
        alert("SUCCESS")
        router.push("/course")
      } catch (error) {
        // Handle error, e.g. show error message
      }
    };
  };


  //Then in your onSubmit() function, call loginAndDispatch() instead of authActions.login():
  const onSubmit = (data: any) => {
    return loginAndDispatch(data);
  };

  

  return (
    <Wrapper className="flex justify-center items-center w-[100vw] h-[100vh] bg-white mx-auto">
      <form
        className="relative w-full md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[30%] flex flex-col items-center justify-center px-10 py-10 gap-y-5"
        onSubmit={onSubmit}
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
            name="username"
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
          <Button
            type="submit"
            className="w-[150px]"
            label="Login"
            disabled={isSubmitting}
            isSubmitting={isSubmitting}
          />
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
