import {CoursePage} from "@/src/components/user/course";
import { DefaultLayout } from "@/src/components/layout/default";
import { NextPage } from "next";

const Course: NextPage = () => {
  return (
    <DefaultLayout>
      <CoursePage />
    </DefaultLayout>
  );
};

export default Course

