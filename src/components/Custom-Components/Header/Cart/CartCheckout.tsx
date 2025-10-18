import { Button } from "@/components/ui/button";
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

const CartCheckOut = () => {
  return (
    <div>
      <Card className="">
        <CardHeader>
          <CardTitle>Order Details</CardTitle>
          <Separator className="my-2" />
        </CardHeader>
        <CardContent className="space-y-2 ">
          <div className="flex justify-between">
            <CardDescription className="">Net Amount</CardDescription>
            <CardDescription>300000 MMK</CardDescription>
          </div>
          <div className="flex justify-between">
            <CardDescription>Tax (5%)</CardDescription>
            <CardDescription>300000 MMK</CardDescription>
          </div>
          <div className="flex justify-between">
            <CardDescription>Discount</CardDescription>
            <CardDescription>300000 MMK</CardDescription>
          </div>
          <div className="flex justify-between">
            <CardDescription>Total</CardDescription>
            <CardDescription>300000 MMK</CardDescription>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Check Out</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CartCheckOut;
