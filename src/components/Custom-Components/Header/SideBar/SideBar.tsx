import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BiMenu } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

import logo from "@/assets/images/online-university-logo.png";
import { useEffect, useState } from "react";
import SideBarMenu from "./SideBarMenu";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <BiMenu />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <div className="flex gap-2 items-center">
                <Link to="/" onChange={() => setOpen(false)}>
                  <img src={logo} alt="" className="size-10" />
                </Link>
                <Link to="/" onChange={() => setOpen(false)}>
                  <h3 className="">Online University</h3>
                </Link>
              </div>
            </SheetTitle>
            <SheetDescription>
              <SideBarMenu />
              <div className="flex min-h-screen">
                <div className="absolute bottom-0 mb-4">Online University</div>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideBar;
