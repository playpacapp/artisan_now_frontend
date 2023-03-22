import { DefaultLayout } from "@/src/components/layout/default";
import {CourseDetailPage} from "@/src/components/user/course";
import { NextPage } from "next";

const Course: NextPage = () => {
  return (
    <DefaultLayout>
      <CourseDetailPage />
    </DefaultLayout>
  );
};

export default Course

