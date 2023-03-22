import { courseInfo } from "@/src/functions";
import { FC } from "react";
import { CourseCard } from "./CourseCard";

export const LiveCourseContainer: FC<{courses:courseInfo[]}> = ({courses}) => {

  const className = `w-full grid place-items-stretch 
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    gap-x-5 lg:gap-x-10
                    gap-y-10 lg:gap-y-20 
                    py-2 md:py-5 mx-auto`
 
  return (
    <div className={`${className}`}>
      {courses && courses.map((item: courseInfo)=>(
        // eslint-disable-next-line react/jsx-key
        <CourseCard className="course-card" kind="live" course={item} />    
      ))}      
    </div>
  );
};
