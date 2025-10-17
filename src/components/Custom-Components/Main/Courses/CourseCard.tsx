import { img1 } from "@/assets/Data/images";
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

const CourseCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
      {Courses.map((category) => (
        <Card className="hover:bg-gray-500 hover:text-white">
          <CardContent className="grid grid-cols-1 items-center gap-4">
            <div className="flex justify-center ">
              <img src={img1} alt="logo" className="size-30 lg:20" />
            </div>

            <div>
              <div className="font-semibold text-md lg:text-lg line-clamp-1">
                {category.Course}
              </div>
            </div>
            <Separator />
            <p className="">Categories: {category.Categories}</p>
            <div className="space-y-2">
              <div className="flex  my-4 gap-2">
                <p className="font-semibold flex gap-2 items-center">
                  <IoIosContact />
                  Instructor :
                </p>
                <p>{category.instructor} </p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="font-semibold flex gap-2 items-center">
                  <FaRegClock />
                  Duration :
                </p>
                <p>{category.Duration}</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="font-semibold flex gap-2 items-center">
                  <GrMoney />
                  Fees :
                </p>
                <p>{category.Fees}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p>Learners : {category.Learners}</p>
              <p>Rating : {category.Rating}</p>
              <p>Certificated : {category.Certificated}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CourseCard;
