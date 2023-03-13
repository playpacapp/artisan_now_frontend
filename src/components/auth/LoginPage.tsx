/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import router, { useRouter } from "next/router";
import { Button, Input, LinkButton, Wrapper } from "../ui";
import { RiKey2Line, RiUserLine } from "react-icons/ri";

import { Copyright } from "../ui/Copyright";
import { Logo } from "../ui/Logo";
import { userActions } from "@/src/store/actions";
import { userConstants } from '@/src/store/constants';

type authPermision = "user" | "artisan" | "admin";

type userData = {
  username: string | null;
  password: string | null;
  login?: boolean;
  permission?: authPermision | "undefined";
};

const initialUser: userData = {
  username: "",
  password: "",
};

interface Inputs {
  username: string;
  password: string;
}

interface RootState {
  authentication: {
    userStatus: string;
  };
}

export const LoginPage = () => {

  const t = useTranslations("login");
  
  // State
  const [inputs, setInputs] = useState<Inputs>({username:'', password:''});

  const [submitted, setSubmitted] = useState<boolean>(false);
  const { username, password } = inputs;
  const { userStatus } = useSelector((state:RootState) => state.authentication);


  // Dispatch
  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  const loggingIn = userStatus === userConstants.LOGIN_REQUEST;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    if (username && password) {
      // get return url from location state or default to home page
      await dispatch<any>(userActions.login(username, password))
    }
  }

  return (
    <Wrapper className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-white mx-auto">
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
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="Enter you Email"
            icon={RiUserLine}
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
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
        <div className="relative w-fit">
          <Button
            type="submit"
            className="w-[150px]"
            label="Login"
            disabled={loggingIn}
            isSubmitting={loggingIn}
          />
        </div>        
      </form>
      <div className="w-full flex flex-wrap justify-center items-center gap-4">
          <span>Do you have not a account?</span>
          <LinkButton
            label="Create a account"
            action={() => router.push("/register")}
          />
        </div>
      <Copyright />
    </Wrapper>
  );
}
