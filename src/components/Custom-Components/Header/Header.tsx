import { ModeToggle } from "../theme/mode-toggle";
import { HeaderNavBar } from "./Header-navBar";
import logo from "@/assets/images/online-university-logo.png";
import { SelectBox } from "./Search/SelectBox";
import { SearchBtn } from "./Search/SearchBtn";
import Profile from "./Profile/Profile";
import SideBar from "./SideBar/SideBar";
import { LoginDialogBox } from "./Profile/Login";
import { Link } from "react-router-dom";

import CartSidebar from "./Cart/CartSidebar";

const isLogin = false;

const Header = () => {
  return (
    <div className="relative z-50">
      <div className="fixed right-0 left-0 top-0 border-b-2 p-4  backdrop-blur-sm flex justify-between items-center">
        {/* Left: Logo + Sidebar */}
        <div className="flex items-center gap-4">
          <div className="lg:hidden">
            <SideBar />
          </div>
          <Link to="/">
            <img src={logo} alt="" className="hidden md:block md:size-12" />
          </Link>
          <h3 className="hidden lg:block font-semibold">Online University</h3>
        </div>

        <div className="hidden lg:block">
          <HeaderNavBar />
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Hide Nav + Select on mobile */}

          <div className="hidden lg:block">
            <SelectBox />
          </div>
          <SearchBtn />

          <CartSidebar />
          <ModeToggle />

          {/* Always visible */}
          <div className="pr-6 md:pr-0">
            {isLogin ? <Profile /> : <LoginDialogBox />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
