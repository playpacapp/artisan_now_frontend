import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { Copyright } from "../ui/Copyright";

import { Button, Input, LinkButton, Wrapper } from "../ui/index";
import { Logo } from "../ui/Logo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AlertState, AuthInfo, loginUrl, User, VAR_STR_ARTISAN, VAR_STR_USER } from "@/src/functions";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import { clear, error, register, success } from "@/src/store";

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
  role: "",
};


export const RegisterPage = () => {

  const router = useRouter()
  const dispatch = useDispatch();

  const [user, setUser] = useState<User>(initUserState)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSubmitted(true)
    user.permission = [VAR_STR_USER, VAR_STR_ARTISAN]
    if (user.email && user.password && user.permission) {

      dispatch(clear());
      
      try {
        await dispatch<any>(register(user));

        // redirect to login page and display success alert
        location.href = loginUrl;
        dispatch(success('Registration successful'));
      } catch (err: any) {
        dispatch(error(err));
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
          <div className="w-full h-[30px] mb-5 flex justify-center">
            <Logo width={200} />
          </div>
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
          <div className="w-full flex flex-col px-5">
            <div className="w-full flex flex-row space-x-3 items-start">
              <input
                id="user-mode"
                name="usermode"
                type="checkbox"
                //value={user.usermode}
                onChange={handleChange}
              />
              <label className="-mt-[6px]" htmlFor="user-mode">Allow users to purchase online courses through the platform</label>
            </div>
            <div className="w-full flex flex-row space-x-3 items-start mt-4">
              <input
                id="artisan-mode"
                name="artisanmode"
                type="checkbox"
                //value={user.artisanmode}
                onChange={handleChange}
              />
              <label className="-mt-[6px]" htmlFor="artisan-mode">Allow artisan to upload and manage online courses through the platform</label>
            </div>
          </div>
          <div className="w-fit">
            <Button
              className="w-[150px]"
              label="Register"
              disabled={submitted}
              isSubmitting={submitted}
            />
          </div>

          <div className="w-full flex flex-wrap justify-center items-center gap-4">
            <span>Do you have a account?</span>
            <Link href={loginUrl}>Login</Link>
          </div>
        </form>
        <Copyright />
      </Wrapper>
    </>
  );
}
