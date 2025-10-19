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

const NewsCard = ({ id }: { id: any }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {Articles.map((article) => (
        <div className="" key={article.id}>
          <Card
            className="sm:text-xs md:text-md hover:bg-gray-500 hover:text-white"
            onClick={() => id(article.id)}
          >
            <CardHeader className="flex justify-between gap-4 items-center">
              <div className="space-y-4 ">
                <CardTitle className="">Name: {article.Name}</CardTitle>
                <p>Author: {article.Author}</p>
                <p>Time: {article.Date}</p>
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
            <CardFooter className="grid grid-cols-2 lg:flex gap-2 lg:gap-4 text-xs">
              <p>Love : {article.Love}</p>
              <p>Comments: {article.Comment}</p>
              <p>Save : {article.Save}</p>
              <p>View : {article.View}</p>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
