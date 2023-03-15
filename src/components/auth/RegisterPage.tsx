import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { Copyright } from "../ui/Copyright";

import { Button, Input, LinkButton, Wrapper } from "../ui/index";
import { Logo } from "../ui/Logo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userActions } from "@/src/store/actions";

interface User {
  username: string;
  password: string;
  permission: "user" | "artisan" | "admin" | undefined;
}

interface RootState {
  registration: {
    registering: boolean;
    registered: boolean;
  };
}

const initUserState = {
  username: "",
  password: "",
  permission: undefined,
};

export function RegisterPage() {
  const router = useRouter()
  const permission = "user"
  const [user, setUser] = useState<User>(initUserState)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const registering = useSelector(
    (state: RootState) => state.registration.registering
  );

  const registered = useSelector(
    (state: RootState) => state.registration.registered
  );

  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {    
    dispatch(userActions.logout())
  }, []);

  useEffect(() => {    
    registered && router.push("/login")
  }, [registered]);

  

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setSubmitted(true)
    user.permission = permission
    if (user.username && user.password && user.permission) {
      dispatch<any>(userActions.register(user))
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
            <Logo link="../" width={200} />
          </div>
          <h1 className="text-center text-x text-900 leading-snug tracking-tight text-gray-600 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
            Register
          </h1>
          <div className="w-full flex flex-col gap-y-5">
            <Input
              type="email"
              placeholder="Enter you Email"
              name="username"
              value={user.username}
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
              className="w-[150px]"
              label="Register"
              disabled={registering}
              isSubmitting={registering}
            />
          </div>
          <div className="w-full flex flex-wrap justify-center items-center gap-4">
            <span>Do you have a account?</span>
            <LinkButton label="Login" action={() => router.push("/login")} />
          </div>
        </form>
        <Copyright />
      </Wrapper>
    </>
  );
}
