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
import { Categories } from "@/assets/Data/Categories";

import { ScrollArea } from "@/components/ui/scroll-area";

//React Icons import
import { BiCategory } from "react-icons/bi";

const SideBarMenu = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <BiCategory />
              Categories
            </div>
          </AccordionTrigger>
          <AccordionContent className="">
            <ScrollArea className="h-40 w-full rounded-md border mt-4 p-4">
              <Link to="/">
                <div className="space-y-4">
                  {Categories.map((category) => (
                    <p className="hover:underline" key={category.id}>
                      {category.name}
                    </p>
                  ))}
                </div>
              </Link>
            </ScrollArea>
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
