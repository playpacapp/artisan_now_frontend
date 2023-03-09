import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

import { Button, Input, LinkButton, Wrapper } from "../../ui/index";
import { Logo } from "../../ui/Logo";

export default function RegisterPage() {
  const t = useTranslations("contact");
  const router = useRouter()
  return (
    <>
      <Wrapper className="h-[100vh] flex items-center justify-center">
        <div className="relative w-full md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[30%] flex flex-col items-center justify-center px-10 py-10 gap-y-5">
          <div className="w-full h-[30px] mb-5 flex justify-center">
            <Logo link="../" width={200}/>
          </div>
          <h1 className="text-center text-x text-900 leading-snug tracking-tight text-gray-600 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
              Register
            </h1>
          <div className="w-full flex flex-col gap-y-5">
            <Input type="email" placeholder="Enter you Email" path="" />
            <Input type="password" placeholder="Enter Password" path="" />
            <Input type="password" placeholder="Confirm Password" path="" />
          </div>
          <div className="w-fit">
            <Button className="w-[150px]" label="Register" />
          </div>
          <div className="w-full flex flex-wrap justify-center items-center gap-4">
            <span>Do you have a account?</span>
            <LinkButton label="Login" action={() => router.push("/login")} />
          </div>          
        </div>
        <div className="absolute bottom-0 w-full flex flex-wrap justify-center items-center border-t text-gray-400 py-10">
            <span>All rights reserved&nbsp;&nbsp;&nbsp;&nbsp;Copyright&nbsp;©&nbsp;2023&nbsp;&nbsp;&nbsp;artisanNow</span>
        </div>
      </Wrapper>
    </>
  );
}

