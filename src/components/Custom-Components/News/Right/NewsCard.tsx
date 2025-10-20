import { Articles } from "@/assets/Data/Article";

import {
  Card,
  // CardAction,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { BsEyeFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { BiSolidCommentDots } from "react-icons/bi";
import { FaHeart } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";

const NewsCard = ({ id }: { id: any }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {Articles.map((article) => (
        <div className="" key={article.id}>
          <Card
            className="sm:text-xs md:text-lg hover:bg-gray-500 hover:text-white"
            onClick={() => id(article.id)}
          >
            <CardHeader className="flex justify-between gap-4 items-center">
              <div className="space-y-4 ">
                <CardTitle className="">{article.Name}</CardTitle>
                <p className="flex items-center gap-2">
                  <IoIosPerson /> {article.Author}
                </p>
                <p className="flex items-center gap-2">
                  <FaRegClock /> {article.Date}
                </p>
              </div>
              <div className="">
                <img
                  src={article.image}
                  alt="image"
                  className="size-30 object-contain"
                />
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3 ">{article.Content}</p>
            </CardContent>
            <Separator className="" />
            <CardFooter className="flex justify-between text-md ">
              <p className="flex items-center gap-2 ">
                <FaHeart className="text-red-500" /> {article.Love}
              </p>

              <p className="flex items-center gap-2">
                <BiSolidCommentDots className="text-green-500" />{" "}
                {article.Comment}
              </p>
              <p className="flex items-center gap-2">
                <FaBookmark className="text-orange-300" /> {article.Save}
              </p>
              <p className="flex items-center gap-2">
                <BsEyeFill className="text-blue-500" /> {article.View}
              </p>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
