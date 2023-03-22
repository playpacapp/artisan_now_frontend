import { FC } from "react";
import { TouristCard } from "./TouristCard";

export const TouristContainer: FC = () => {
  
  const className = `w-full grid place-items-stretch 
                      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                      gap-5 lg:gap-10  
                      py-2 md:py-5 mx-auto`

  return (
    <div className={`${className}`}>
      <TouristCard url="/image/card/sea.webp" label="Natural" />
      <TouristCard url="/image/card/5043-original.jpg" label="Natural" />
      <TouristCard url="/image/card/sea.webp" label="Natural" />
      <TouristCard url="/image/card/5043-original.jpg" label="Natural" />
      <TouristCard url="/image/card/sea.webp" label="Natural" />
    </div>
  );
};
