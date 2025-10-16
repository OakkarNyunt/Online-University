import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { LoginSignUpTab } from "./Login-SignUp";

export function LoginDialogBox() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Log in</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <LoginSignUpTab />
        </DialogContent>
      </form>
    </Dialog>
  );
}
