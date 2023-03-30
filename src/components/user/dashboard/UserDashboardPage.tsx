import { AuthState, courseInfo, homeUrl } from "@/src/functions";
import { useTranslations } from "next-intl";
import { RiSearchLine } from "react-icons/ri";
import courses from "@/public/course.json"

import {
  Input,
  Wrapper,
  CategoriesBar,
  CourseContainer,
  Container,
  TouristContainer,
  LiveCourseContainer,
  H3Icon,
} from "../../ui";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { OnlineIcon, DestinationIcon } from "../../ui";

export function UserDashboardPage() {

  const t = useTranslations("user.course");
  const router = useRouter()

  const auth: AuthState = useSelector((state: any) => state.auth);

  //if (auth.token === null) router.push(homeUrl)

  return (
    <>
      <Wrapper>
        <Container className="w-full items-start justify-center mx-auto py-2 md:py-5">
          <CategoriesBar />
        </Container>
      </Wrapper>
      <Wrapper>
        <Container className="flex w-full items-center justify-center mx-auto pb-2 md:pb-5">
          <Input
            className="w-3/4"
            type="text"
            placeholder="Search"
            icon={RiSearchLine}
          />
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <H3Icon icon={OnlineIcon}  label={t("subtitle.online-experiences")} />
          <CourseContainer courses={courses} artisanName={t("subtitle.online-experiences")} />
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <H3Icon icon={DestinationIcon} label={t("subtitle.experiences")} />
          <TouristContainer courses={courses} artisanName={t("subtitle.experiences")} />
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <H3Icon icon={OnlineIcon} label={t("subtitle.artisan-channel")} />
          <span className="ml-[55px] mb-5">Upcoming experiences at artisanNowLIVE</span>
          <LiveCourseContainer courses={courses} artisanName={t("subtitle.artisan-channel")} />
        </Container>
      </Wrapper>
    </>
  );
}
