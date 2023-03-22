import { FC } from "react";
import { OnlineCourseCard } from "./OnlineCourseCard";

export const OnlineCourseContainer: FC = () => {

  const className = `w-full grid place-items-stretch 
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                    gap-5 lg:gap-10 
                    py-2 md:py-5 mx-auto`

  return (
    <div className={`${className}`}>
      <OnlineCourseCard url="/image/card/5043-original.jpg" label="Natural" />
      <OnlineCourseCard url="/image/card/2846-original.webp" label="Natural" />
      <OnlineCourseCard url="/image/card/5043-original.jpg" label="Natural" />
      <OnlineCourseCard url="/image/card/5043-original.jpg" label="Natural" />
    </div>
  );
};
