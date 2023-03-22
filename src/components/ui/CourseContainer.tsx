import { courseInfo } from "@/src/functions";
import { FC } from "react";
import { CourseCard } from "./CourseCard";

export const CourseContainer: FC = () => {

  const className = `w-full grid place-items-stretch 
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    gap-5 lg:gap-10 
                    py-2 md:py-5 mx-auto`

  const course: courseInfo = {
    imageUrl: "/image/card/5043-original.jpg",
    courseName: "Name of Course",
    destination: "destination, Chile",
    artisanName: "artisan",
    episode: 0,
    duration: 0,
    categories: ["category1", "category2"],
    price: "20",    
  }

  return (
    <div className={`${className}`}>
      <CourseCard className="course-card" course={course} />
      <CourseCard className="course-card" course={course}  />
      <CourseCard className="course-card" course={course} />
      <CourseCard className="course-card" course={course}  />
      <CourseCard className="course-card" course={course}  />
      <CourseCard className="course-card" course={course} />
      <CourseCard className="course-card" course={course}  />
    </div>
  );
};
