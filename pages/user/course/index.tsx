import CoursePage from "@/src/components/user/course";
import { DefaultLayout } from "@/src/components/layout/default";
import { NextPage } from "next";

const Course: NextPage = () => {
  return (
    <DefaultLayout>
      <CoursePage />
    </DefaultLayout>
  );
};

export default Course;

export async function getStaticProps(locale: string) {
  return {
    props: {
      messages: (await import(`@/message/en-Us.json`)).default,
    },
  };
}
