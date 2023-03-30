import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { Copyright } from "../ui/Copyright";

import { Button, Input, LinkButton, PageLink, Wrapper } from "../ui/index";
import { Logo } from "../ui/Logo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AlertState, AuthInfo, loginUrl, User, VAR_STR_ARTISAN, VAR_STR_USER } from "@/src/functions";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import { errorAlert, register } from "@/src/store";

interface RootState {
  registration: {
    registering: boolean;
    registered: boolean;
  };
}

const initUserState: User = {
  email: "",
  password: "",
  permission: [],
};


export const RegisterPage = () => {

  const router = useRouter()
  const dispatch = useDispatch();

  const [user, setUser] = useState<User>(initUserState)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const registering = useSelector((state:any) => state.auth.registering)
  const registered = useSelector((state:any) => state.auth.registered)

  useEffect(() => {
    if (registered) router.push(loginUrl)
  }, [registered])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSubmitted(true)
    user.permission = [VAR_STR_USER, VAR_STR_ARTISAN]
    if (user.email && user.password && user.permission) {

      try {
        await dispatch<any>(register(user));

      } catch (err: any) {
        errorAlert(err);
      }
    }
  }

  return (
    <>
      <Wrapper className="h-[100vh] flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="relative w-full md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[30%] flex flex-col items-center justify-center px-10 py-10 gap-y-5"
        >          
          <h1 className="text-center text-x text-900 leading-snug tracking-tight text-gray-600 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
            Register
          </h1>
          <div className="w-full flex flex-col gap-y-5">
            <Input
              type="email"
              placeholder="Enter you Email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            <Input type="password" placeholder="Confirm Password" />
          </div>
         
          <div className="w-fit">
            <Button
              className="w-[150px] relative"
              label="Register"
              disabled={registering}
              isSubmitting={registering}
            />
          </div>

          <div className="w-full flex flex-wrap justify-center items-center gap-4">
            <span>Do you have a account?</span>
            <Link className="underline" href={loginUrl}> Login </Link>
          </div>
        </form>
        
        <Copyright />
      </Wrapper>
    </>
  );
}
