import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ProfileImg } from "@/assets/Data/images";

const AboutPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-8 md:p-0">
      <Card className="md:max-w-[600px]">
        <CardHeader>
          <CardTitle className="flex justify-center">
            <img
              src={ProfileImg}
              alt=""
              className="size-50 object-contain rounded-full"
            />
          </CardTitle>
          <p className="text-center text-2xl my-4">Oakkar Nyunt</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This website is built using React, Tailwind CSS, and the shadcn/ui
            component library.
          </p>

          <p>
            I specialize in developing innovative, user-focused web, mobile, and
            desktop applications, with a strong focus on performance, usability,
            and clean architecture.
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-muted-foreground">oakkarnyunt@gmail.com</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AboutPage;
