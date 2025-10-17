import { Courses } from "@/assets/Data/Courses";
import Title from "@/components/Custom-Components/Main/Reviews/Title";
import CarouselDemo from "@/components/Custom-Components/Main/Reviews/Carousel";

const courseCount = Courses.length;

const Reviews = () => {
  return (
    <div className="">
      <Title title="Reviews" count={courseCount} />
      <div className="">
        <CarouselDemo />
      </div>
    </div>
  );
};

export default Reviews;
