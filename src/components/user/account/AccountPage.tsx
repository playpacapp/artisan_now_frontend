import { useTranslations } from "next-intl";
import { FC } from "react";
import { RiSearchLine } from "react-icons/ri";

import { Input, ImageCard, Wrapper, CategoriesBar, CourseContainer, Button, Container } from "../../ui/index";

type Props = {
  label: string;

}

const Tab:FC<Props> = (props) => {
  const {label} = props
  return (
    <>
      <button className="w-fit border-b-2 border-gray-100 hover:border-gray-600 text-lg text-600 px-3 py-2">{label}</button>
    </>
  )
}

export function AccountPage() {
  const t = useTranslations("user.account");
  return (
    <>
      <Wrapper>
        <Container className="w-full flex gap-x-4 items-center justify-end">
          <Tab label={"Profile Settings"} />
          <Tab label={"Account Settings"} />
        </Container>
      </Wrapper>
      <Wrapper>
      <Wrapper>
        <Container>
          <h2>Profile Settings</h2>
        </Container>
      </Wrapper>

      </Wrapper>
    </>
  );
}
