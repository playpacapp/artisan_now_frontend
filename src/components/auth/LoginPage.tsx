/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect, use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { Button, Input, LinkButton, PageLink, Wrapper } from "../ui";
import { RiKey2Line, RiUserLine } from "react-icons/ri";

import { Copyright } from "../ui/Copyright";
import { Logo } from "../ui/Logo";
import { artisanDashboardUrl, homeUrl, localeState, registerUrl, userDashboardUrl, userState, VAR_STR_USER } from "@/src/functions";
import Link from "next/link";
import { login, logout } from "@/src/store";

interface Inputs {
  email: string;
  password: string;
}

const role = VAR_STR_USER

export const LoginPage = () => {
  
  //const t = useTranslations("login")
  const router = useRouter()
  
  // State
  const [inputs, setInputs] = useState<Inputs>({ email: "", password: "" })

  const { email, password } = inputs
  const loggingIn = useSelector((state:any) => state.auth.loggingIn)
  const loggedIn = useSelector((state:any) => state.auth.loggedIn)

  // Dispatch
  const dispatch = useDispatch()

  // reset login status
  useEffect(() => {
    dispatch(logout())
  }, []);

  useEffect(() => {
    if (loggedIn) (role === VAR_STR_USER)? router.push(userDashboardUrl): router.push(artisanDashboardUrl)
  }, [loggedIn])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (email && password) {
      // get return url from location state or default to home page
      dispatch<any>(login(email, password, role))
    }
  };

  return (
    <Wrapper className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-white mx-auto">
      <form
        className="relative w-full md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[30%] flex flex-col items-center justify-center px-10 py-10 gap-y-5"
        onSubmit={handleSubmit}
      >        
        <h1 className="text-center text-x text-900 leading-snug tracking-tight text-gray-600 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
          Login
        </h1>
        <div className="w-full flex flex-col gap-y-5">
          <Input
            type="email"
            name="email"
            value={email}
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
          <Link className="underline" href={homeUrl} >Forgot Password?</Link>
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
        <Link className="underline" href={registerUrl} >Create a account</Link>
      </div>      
      <Copyright />
    </Wrapper>
  );
};
