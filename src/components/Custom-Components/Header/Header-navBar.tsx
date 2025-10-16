import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

//local imports
import { Categories } from "@/assets/Data/Categories";
import { ScrollArea } from "@/components/ui/scroll-area";

import { BiCategory } from "react-icons/bi";

import { GiNewspaper } from "react-icons/gi";
import { GrContactInfo } from "react-icons/gr";
import { TfiHelpAlt } from "react-icons/tfi";

export function HeaderNavBar() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex gap-2 items-center">
            <BiCategory />
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ScrollArea className="h-[200px] rounded-md border p-4">
              <ul className="w-[400px] gap-2">
                <li className="grid grid-cols-2">
                  {Categories.map((category) => (
                    <NavigationMenuLink asChild>
                      <Link to="#" key={category.id}>
                        {category.name}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </li>
              </ul>
            </ScrollArea>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/news">
              <div className=" flex gap-2 items-center">
                <GiNewspaper />
                <p>News</p>
              </div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/contact">
              <div className=" flex gap-2 items-center">
                <GrContactInfo />
                <p>Contact</p>
              </div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/about">
              <div className=" flex gap-2 items-center">
                <TfiHelpAlt />
                <p>About</p>
              </div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
