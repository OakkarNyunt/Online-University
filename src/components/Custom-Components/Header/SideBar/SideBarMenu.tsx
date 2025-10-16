import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

//React Icons import
import { GiNewspaper } from "react-icons/gi";
import { GrContactInfo } from "react-icons/gr";
import { TfiHelpAlt } from "react-icons/tfi";

const SideBarMenu = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent className="flex">
            <Link to="/">
              <div className="grid grid-cols-3 gap-4 ">
                <p className="hover:underline">IT</p>
                <p className="hover:underline">Management</p>
                <p className="hover:underline">Engineering</p>
                <p className="hover:underline">Medical</p>
                <p className="hover:underline">Language</p>
                <p className="hover:underline">Business</p>
              </div>
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Separator className="my-4" />
      <div className="hover:underline flex gap-2 items-center">
        <GiNewspaper />
        <Link to="/news">
          <p>News</p>
        </Link>
      </div>
      <Separator className="my-4" />
      <div className="hover:underline flex gap-2 items-center">
        <GrContactInfo />
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </div>
      <Separator className="my-4" />
      <div className="hover:underline flex gap-2 items-center">
        <TfiHelpAlt />
        <Link to="/about">
          <p>About</p>
        </Link>
      </div>
      <Separator className="my-4" />
    </div>
  );
};

export default SideBarMenu;
