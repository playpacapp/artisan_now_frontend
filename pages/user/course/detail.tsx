import { DefaultLayout } from "@/src/components/layout/default";
import {CourseDetailPage} from "@/src/components/user/course";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Course: NextPage = () => {

  const router = useRouter();
  const {kind} = router.query;

  return (
    <DefaultLayout>
      {kind=="course" && <CourseDetailPage />}
    </DefaultLayout>
  );
};

export default Course

