import { useTranslations } from "next-intl";
import { FC } from "react";
import Image from "next/image";

import { Wrapper, Container, Input, Button } from "../../ui";

type Props = {
  label: string;
};

const Tab: FC<Props> = (props) => {
  const { label } = props;
  return (
    <>
      <button className="w-fit border-b-2 border-gray-100 hover:border-gray-600 text-lg text-600 px-3 py-2">
        {label}
      </button>
    </>
  );
};

const Profile = () => {
  return (
    <Container className="flex flex-col md:flex-row gap-20">
      <div>
        <h2 className="text-start">{t("profile-settings")}</h2>
        <div className="user-image my-10 flex flex-wrap">
          <Image src="" alt="Avatar" width={128} height={128} />
        </div>
        <span className="text-gray-600 ">
          Tip: Tip: Choose a picture where people can see your face.
        </span>{" "}
        <br></br>
        <span className="text-gray-600 ">.JPG or .PNG. Max. 20 MB</span>
      </div>
      <div className="flex flex-col gap-3">
        <h3>Your Name</h3>
        <input
          type="text"
          name="firstname"
          placeholder="Enter your First name"
          required
        />
        <input
          type="text"
          name="lastname"
          placeholder="Enter your Last name"
          required
        />
        <h3>Your profile biography</h3>
        <textarea
          name="biography"
          aria-multiline="true"
          rows={5}
          placeholder="Tell us something about yourself..."
          maxLength={1500}
          spellCheck
        />
        <span className="text-gray-600">
          artisanNow is built on relationships. Help other people get to know
          you.
        </span>
        <Button className="w-[50%]" label={t("save-profile")} />
      </div>
    </Container>
  );
};

export function AccountPage() {
  const t = useTranslations("user.account");

  return (
    <>
      <Wrapper className="w-full flex justify-center">
        <div className="w-[90%] lg:w-[70%]">
          <Container className="flex gap-x-4 items-center justify-end">
            <Tab label={t("profile-settings")} />
            <Tab label={t("account-settings")} />
          </Container>
          <Container className="flex flex-col gap-20">
            <div>
              <h2 className="text-start">{t("profile-settings")}</h2>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Your Email Address</h3>
              <input
                type="email"
                name="username"
                placeholder="Enter your Email"
                required
              />
              <span>Your email address is verified</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Phone Number</h3>
              <input
                className="w-[200px]"
                type="text"
                name="phonenumber"
                placeholder="Enter your Phone number"
                required
              />
              <span className="text-gray-600">
                artisanNow is built on relationships. Help other people get to
                know you.
              </span>
             
            </div>
            
            {/* Password */}
            <div className="flex flex-col gap-2">
              <h3>New Password</h3>
              <input
                type="password"
                name="password"
                placeholder="Enter your new Password"
                required
              />
              <span>Please confirm the new password again.</span>
            </div>
            <Button className="w-[50%]" label={t("save-profile")} />

            {/* Account */}
            <div className="flex flex-col gap-2">
              <h3>Delete Account</h3>
              
              <span>Your account will be deleted within 48 hours.</span> 
              <span>If you want to delete it please click on the button below.</span>
            </div>
            <Button className="w-[50%]" label={"Delete Account"} />
          </Container>
        </div>
      </Wrapper>
    </>
  );
}
