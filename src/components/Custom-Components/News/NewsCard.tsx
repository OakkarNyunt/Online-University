import { Python } from "@/assets/Data/images";
import {
  Card,
  // CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const NewsCard = () => {
  return (
    <div>
      <Card className="sm:text-xs md:text-md">
        <CardHeader className="flex justify-between gap-4 items-center">
          <div className="space-y-4 ">
            <CardTitle>Name: Restful API</CardTitle>
            <CardDescription>Author: Oakkar</CardDescription>
            <CardDescription>Time: 2 hours ago</CardDescription>
          </div>
          <div className="">
            <img src={Python} alt="image" className="size-30 object-contain" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-muted-foreground ">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical
          </p>
        </CardContent>
        <Separator className="" />
        <CardFooter className="flex gap-1 justify-between text-xs">
          <p>Love : 30K</p>
          <p>Comments: 1.5K</p>
          <p>Save : 100K</p>
          <p>View : 100K</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewsCard;
