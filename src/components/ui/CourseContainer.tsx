import { FC } from "react";
import { ImageCard } from "./ImageCard";

export const CourseContainer: FC = () => {

  return (
    <div className="w-full grid place-items-stretch grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-5 mx-auto pb-2 md:pb-5">
      <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
      <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
      <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
      <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
      <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
      <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
      <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
      <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
      <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
      <ImageCard url="/image/card/5043-original.jpg" label="Natural" />
    </div>
  );
};
