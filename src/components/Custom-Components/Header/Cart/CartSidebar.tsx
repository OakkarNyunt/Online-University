import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
// import Cart from "./Cart";
import { ScrollAreaDemo } from "./ScrollArea";
import CartCheckOut from "./CartCheckout";

const isCart = 1;

const CartSidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Automatically close when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <div className="relative">
            <Button variant="outline" className="rounded-full">
              <PiShoppingCartBold className="text-xl" />
              {isCart > 0 ? (
                <Badge
                  className="absolute -top-2 -right-1 h-5 min-w-5 rounded-full px-1 font-mono text-xs tabular-nums bg-red-500 text-white"
                  variant="default"
                >
                  {isCart > 99 ? "+99" : isCart}
                </Badge>
              ) : null}
            </Button>
          </div>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <p className="text-lg md:text-2xl p-2">Your Cart</p>
              <h4 className="mb-4 text-sm leading-none font-medium text-end me-4 ">
                {isCart > 0 ? `Total - ${isCart}` : null}
              </h4>
            </SheetTitle>
            {isCart > 0 ? (
              <div className="space-y-4">
                <ScrollAreaDemo />
                <CartCheckOut />
              </div>
            ) : (
              <SheetDescription>
                <div className="min-h-screen flex flex-col space-y-4 items-center justify-center">
                  <p>Your Cart is empty.</p>
                  <Link to="/" onClick={() => setOpen(false)}>
                    <Button>
                      Get Something <PiShoppingCartBold />
                    </Button>
                  </Link>
                </div>
              </SheetDescription>
            )}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartSidebar;
