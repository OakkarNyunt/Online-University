import { img1 } from "@/assets/Data/images";
import {
  Card,
  //   CardAction,
  CardContent,
  //   CardDescription,
  //   CardFooter,
  CardHeader,
  //   CardTitle,
} from "@/components/ui/card";

import { IoIosContact } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { GrMoney } from "react-icons/gr";

const CourseCard = () => {
  return (
    <div>
      <Card className="">
        <CardHeader>
          <div className="font-semibold text-md lg:text-lg line-clamp-3">
            Game Development with Unity
          </div>
        </CardHeader>

        <CardContent className="grid grid-cols-1 items-center gap-4">
          <div className="flex justify-center ">
            <img src={img1} alt="logo" className="size-30 lg:20" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-start my-4 gap-4">
              <p className="font-semibold flex gap-2 items-center">
                <IoIosContact />
                Instructor :
              </p>
              <p>Shunn Lae Kay Khaing kyaw </p>
            </div>
            <div className="flex justify-start gap-4">
              <p className="font-semibold flex gap-2 items-center">
                <FaRegClock />
                Duration :
              </p>
              <p>3 Months</p>
            </div>
            <div className="flex justify-start gap-4">
              <p className="font-semibold flex gap-2 items-center">
                <GrMoney />
                Fees :
              </p>
              <p>300000 MMK</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p>Learners : 186</p>
            <p>Rating : 4.7</p>
            <p>Certificated : 186</p>
            <p>Certificated : 186</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseCard;
