import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

//React Icons import
import { MdPhoneIphone } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

export function LoginSignUpTab() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Sign Up</TabsTrigger>
          <TabsTrigger value="password">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle className="text-center my-4">Sign Up</CardTitle>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Separator className="flex-1" />
                <span>with</span>
                <Separator className="flex-1" />
              </div>
              <Button variant="outline">
                <MdPhoneIphone /> Phone Number
              </Button>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Separator className="flex-1" />
                <span>or</span>
                <Separator className="flex-1" />
              </div>
              <Button variant="outline">
                <FcGoogle />
                Google
              </Button>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className=""></div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Log in</CardTitle>
              <CardDescription>
                Enter your Phone or Email and Password
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-current">Phone or Email</Label>
                <Input id="tabs-demo-current" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-new">password</Label>
                <Input id="tabs-demo-new" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Log in</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
