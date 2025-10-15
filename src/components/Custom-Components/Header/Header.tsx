import { ModeToggle } from "../theme/mode-toggle";
import { HeaderNavBar } from "./Header-navBar";
import logo from "@/assets/images/online-university-logo.png";
import { SelectBox } from "./SelectBox";
import { SearchBtn } from "./SearchBtn";
import Profile from "./Profile";
import SideBar from "./SideBar";
import { LoginDialogBox } from "./Login";

const isLogin = false;

const Header = () => {
  return (
    <div className="relative">
      <div className="fixed right-0 left-0 top-0 border-b-2 p-4  backdrop-blur-sm flex justify-between items-center px-4">
        <div className="lg:hidden mr-2">
          <SideBar />
        </div>
        <div className="flex gap-2 items-center">
          <img src={logo} alt="" className="hidden lg:block md:size-15" />
          <h3 className="hidden lg:block">Online University</h3>
        </div>

        <div className="hidden lg:block">
          <HeaderNavBar />
        </div>
        <div className="gap-2 flex">
          <div className="hidden lg:block">
            <SelectBox />
          </div>
          <SearchBtn />
          <ModeToggle />
          {isLogin ? <Profile /> : <LoginDialogBox />}
        </div>
      </div>
    </div>
  );
};

export default Header;
