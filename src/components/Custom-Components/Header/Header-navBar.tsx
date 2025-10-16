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

export function HeaderNavBar() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[400px] gap-2">
              <li className="grid grid-cols-2">
                <NavigationMenuLink asChild>
                  <Link to="#">IT </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#">Management </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#">Engineering </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#">Engineering </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#">Medical </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#">Language </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="#">Business </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/news">News</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
