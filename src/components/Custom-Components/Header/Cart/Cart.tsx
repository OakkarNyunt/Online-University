import { Button } from "@/components/ui/button";
import {
  Card,
  //   CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Cart = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardDescription>Description</CardDescription>
          <CardTitle className="text-xs md:text-md line-clamp-1">
            Computer Hardware Course
          </CardTitle>
        </CardHeader>
        <div className="space-y-2 text-xs md:text-lg line-clamp-1">
          <CardContent className="flex justify-between">
            <p>Instructor:</p>
            <p>Sir Phone Nyo</p>
          </CardContent>
          <CardContent className="flex justify-between">
            <p>Duration:</p>
            <p>3 months</p>
          </CardContent>
          <CardContent className="flex justify-between">
            <p>Fees:</p>
            <p>300000 MMK</p>
          </CardContent>
        </div>
        <CardFooter className="flex justify-end">
          <Button variant="destructive">Remove</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cart;
