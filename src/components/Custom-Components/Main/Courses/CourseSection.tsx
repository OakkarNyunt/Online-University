import { Categories } from "@/assets/Data/Categories";

import { Button } from "@/components/ui/button";

import { ScrollHorizontal } from "@/components/Custom-Components/Main/Courses/ScrollHorizontal";
import { Link } from "react-router-dom";

import { PaginationDemo } from "./Pagination";
import DialogBox from "./DialogBox/DialogBox";

const CourseSection = () => {
  return (
    <div>
      <div className="my-4">
        {/* Categories for Mobile  */}
        <ScrollHorizontal />
        {/* Categories for Mobile */}

        {/* Categories PC & Tablet View */}
        <div className="hidden lg:block ">
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
        {/* Categories PC & Tablet View */}

        {/* Course Card Section */}
        <div className="mt-8 flex justify-center">
          <DialogBox />
        </div>
        <div className="mt-8">
          <PaginationDemo />
        </div>

        {/* Course Card Section */}
      </div>
    </div>
  );
};

export default CourseSection;
