import { Categories } from "@/assets/Data/Categories";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { ScrollHorizontal } from "@/components/Custom-Components/Main/ScrollHorizontal";
import { Link } from "react-router-dom";
import CourseCard from "@/components/Custom-Components/Main/Courses/CourseCard";
import { Courses } from "@/assets/Data/Courses";

const courseCount = Courses.length;

const CourseSection = () => {
  return (
    <div>
      <div className="my-4 p-4  mx-auto container">
        <p className="font-bold text-xl lg:text-2xl">
          Available Course - {courseCount}
        </p>
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
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
