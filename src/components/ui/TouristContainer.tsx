import { courseInfo } from "@/src/functions";
import { FC } from "react";
import { CourseCard } from "./CourseCard";

export const TouristContainer: FC<{courses:courseInfo[]}> = ({courses}) => {

  const className = `w-full grid place-items-stretch 
                      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                      gap-5 lg:gap-10  
                      py-2 md:py-5 mx-auto`

  return (
    <div className={`${className}`}>
      {courses && courses.map((item: courseInfo, index) => (
        // eslint-disable-next-line react/jsx-key
        <CourseCard key={index} className="course-card" kind="tourist" course={item} />
      ))}
    </div>
  );
};
