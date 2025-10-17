import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CourseCard from "../CourseCard";

import { img1 } from "@/assets/Data/images";
import AccordionDemo from "./Accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

const DialogBox = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <CourseCard />
        </DialogTrigger>
        <DialogContent className="lg:min-w-[600px] min-w-[300px] min-h-[600px]  lg:min-h-[600px]">
          <ScrollArea className="h-[600px]  p-4 m-4">
            <DialogHeader>
              <DialogTitle>Course Details</DialogTitle>
              <DialogDescription>
                <div className="">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex justify-center">
                      <img src={img1} alt="" className="size-15 lg:size-30" />
                    </div>
                    <div className="text-start space-y-2">
                      <p>Game Development With Unity</p>
                      <div className="flex gap-4 justify-start">
                        <p>Instructor:</p>
                        <p>Oakkar</p>
                      </div>

                      <div className="flex gap-4 justify-start">
                        <p>Duration:</p>
                        <p>3 Months</p>
                      </div>
                      <div className="flex gap-4 justify-start">
                        <p>Fees:</p>
                        <p>600000 MMK</p>
                      </div>

                      <div className="grid grid-cols-2">
                        <p>Learners: 100</p>
                        <p>Reviews:10</p>
                        <p>Rating:4.7</p>
                        <p>Certificated: 80</p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <AccordionDemo />
                  </div>
                  <div className="">
                    <AccordionDemo />
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogBox;
