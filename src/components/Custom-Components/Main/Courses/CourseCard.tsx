import {
  Card,
  //   CardAction,
  CardContent,
  //   CardDescription,
  //   CardFooter,
  // CardHeader,
  //   CardTitle,
} from "@/components/ui/card";

import { IoIosContact } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";
import { Courses } from "@/assets/Data/Courses";
import { Separator } from "@/components/ui/separator";

// import { Link } from "react-router-dom";

const CourseCard = ({ onSelect }: { onSelect: any }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Courses.map((course) => (
        <Card
          key={course.id}
          onClick={() => onSelect(course.id)}
          className="hover:bg-gray-500 hover:text-white "
        >
          <CardContent className="grid grid-cols-1 items-center gap-4">
            <div className="flex justify-center ">
              <img
                src={course.image}
                alt="logo"
                className="size-30 lg:50 object-contain"
              />
            </div>

            <div>
              <div className="font-semibold text-md lg:text-lg line-clamp-1">
                {course.Course}
              </div>
            </div>
            <Separator />
            <p className="">Categories: {course.Categories}</p>
            <div className="space-y-2">
              <div className="flex  my-4 gap-2">
                <p className="font-semibold flex gap-2 items-center">
                  <IoIosContact />
                  Instructor :
                </p>
                <p>{course.instructor} </p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="font-semibold flex gap-2 items-center">
                  <FaRegClock />
                  Duration :
                </p>
                <p>{course.Duration}</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="font-semibold flex gap-2 items-center">
                  <GrMoney />
                  Fees :
                </p>
                <p>{course.Fees}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p>Learners : {course.Learners}</p>
              <p>Rating : {course.Rating}</p>
              <p>Certificated : {course.Certificated}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CourseCard;
