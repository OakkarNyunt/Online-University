import { Categories } from "@/assets/Data/Categories";
import CarouselDemo from "@/components/Custom-Components/Main/Carousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { TiPen } from "react-icons/ti";

import { ScrollHorizontal } from "@/components/Custom-Components/Main/ScrollHorizontal";
import { Link } from "react-router-dom";
import CourseCard from "@/components/Custom-Components/Main/CourseCard";

const MainContent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto p-4 md:p-0 container mt-4 z-0">
        <div className="flex relative  justify-center items-center border-2 p-16 md:p-0 rounded-2xl backdrop-blur-sm">
          <div className="space-y-6 ">
            <div className="absolute top-4 right-4">
              <Button className="">
                <TiPen />
                Enroll Now !
              </Button>
            </div>
            <div className="flex gap-6 items-center">
              <p className="text-xl md:text-3xl">Join</p>
              <p className="text-blue-600 text-3xl md:text-5xl"> Today,</p>
            </div>
            <div className="flex gap-6 items-center">
              <p className="text-xl md:text-3xl">Learn</p>
              <p className="text-orange-500 text-2xl md:text-5xl"> Every Day</p>
            </div>
          </div>
        </div>

        <div className="">
          <CarouselDemo />
        </div>
      </div>
      <div className="my-4 p-4  mx-auto container">
        <p className="font-bold text-xl lg:text-2xl">Available Course - 31</p>
        <Separator className="my-4" />

        {/* for Mobile */}
        <ScrollHorizontal />

        {/* PC & Tablet View */}
        <div className="hidden lg:block container mx-auto">
          <div className="gap-4 flex flex-wrap">
            {Categories.map((category) => (
              <Link to="*">
                <Button variant="outline" key={category.id}>
                  {category.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>

      <div className="">Trending Course</div>
    </div>
  );
};

export default MainContent;
