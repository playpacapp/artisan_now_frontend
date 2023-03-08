import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

import { DefaultButton, IconInput, LinkButton, Wrapper } from "../../ui";
import { Logo } from "../../ui/Logo";

export default function LoginPage() {
  const t = useTranslations("contact");
  const router = useRouter();

  const auth = { login: true, role: "user" };

  if (auth.login && !!auth.role) {
    //router.push("/course")
  }

  return (
    <>
      <Wrapper className="h-[100vh] flex items-center justify-center">
        <div className="relative w-full md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[30%] flex flex-col items-center justify-center px-10 py-10 gap-y-5">
          <div className="w-full mb-5 flex justify-center">
            <Logo link="../" width={200}/>
          </div>
          <h1 className="text-center text-x text-900 leading-snug tracking-tight text-gray-600 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
              Login
            </h1>
          <div className="w-full flex flex-col gap-y-5">
            <IconInput type="email" placeholder="Enter you Email" path="" />
            <IconInput type="password" placeholder="Enter Password" path="" />
          </div>
          <div className="w-full flex flex-row-reverse">
            <LinkButton label="Forgot Password?" action={() => router.push("/")} />
          </div>
          <div className="w-fit">
            <DefaultButton className="w-[150px]" label="Login" />
          </div>
          <div className="w-full flex flex-wrap justify-center items-center gap-4">
            <span>Do you have not a account?</span>
            <LinkButton label="Create a account" action={() => router.push("/register")} />
          </div>          
        </div>
        <div className="absolute bottom-0 w-full flex flex-wrap justify-center items-center border-t text-gray-400 py-10">
            <span>All rights reserved&nbsp;&nbsp;&nbsp;&nbsp;Copyright&nbsp;©&nbsp;2023&nbsp;&nbsp;&nbsp;artisanNow</span>
        </div>
      </Wrapper>
    </>
  );
}
