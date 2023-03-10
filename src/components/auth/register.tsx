import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Copyright } from "../ui/Copyright";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Button, Input, LinkButton, Wrapper } from "../ui/index";
import { Logo } from "../ui/Logo";
import { useDispatch } from "react-redux";

export function RegisterPage() {

  //const t = useTranslations("contact");
  const router = useRouter()

  const dispatch = useDispatch();

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  async function onSubmit(data: any) {
    //dispatch(alertActions.clear());
    try {
      // await dispatch(userActions.register(data)).unwrap();

      // // redirect to login page and display success alert
      // //history.navigate("/account/login");
      // dispatch(
      //   alertActions.success({
      //     message: "Registration successful",
      //     showAfterRedirect: true,
      //   })
      // );
    } catch (error) {
      //dispatch(alertActions.error(error));
    }
  }

  return (
    <>
      <Wrapper className="h-[100vh] flex items-center justify-center">
        <div className="relative w-full md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[30%] flex flex-col items-center justify-center px-10 py-10 gap-y-5">
          <div className="w-full h-[30px] mb-5 flex justify-center">
            <Logo link="../" width={200} />
          </div>
          <h1 className="text-center text-x text-900 leading-snug tracking-tight text-gray-600 lg:text-2xl lg:leading-tight xl:text-4xl xl:leading-tight">
            Register
          </h1>
          <div className="w-full flex flex-col gap-y-5">
            <Input type="email" placeholder="Enter you Email" />
            <Input type="password" placeholder="Enter Password" />
            <Input type="password" placeholder="Confirm Password" />
          </div>
          <div className="w-fit">
            <Button className="w-[150px]" label="Register" />
          </div>
          <div className="w-full flex flex-wrap justify-center items-center gap-4">
            <span>Do you have a account?</span>
            <LinkButton label="Login" action={() => router.push("/login")} />
          </div>
        </div>
        <Copyright />
      </Wrapper>
    </>
  );
}
