import { DefaultLayout } from "@/src/components/layout/default";
import {CourseDetailPage, TouristDetailPage, LiveDetailPage} from "@/src/components/user/course";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Course: NextPage = () => {

  const router = useRouter();
  const {kind} = router.query;

  return (
    <DefaultLayout>
      {kind=="course" && <CourseDetailPage />}
      {kind=="tourist" && <TouristDetailPage />}
      {kind=="live" && <LiveDetailPage />}
    </DefaultLayout>
  );
};

export default Course

