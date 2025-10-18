import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CourseCard from "../CourseCard";

import AccordionDemo from "./Accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import OutlineDemo from "./Outline";
import { Button } from "@/components/ui/button";
import CourseReview from "./CourseReview";
import { useState } from "react";
import { Courses } from "@/assets/Data/Courses";
import { Separator } from "@/components/ui/separator";

const DialogBox = () => {
  //Get selected Id
  const [selectId, setSelectId] = useState<number | null>(null);

  //Get full data using selected ID
  const selectedCourse = Courses.find((course) => course.id === selectId);
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <CourseCard onSelect={setSelectId} />
        </DialogTrigger>
        <DialogContent className="lg:min-w-[800px] min-w-[300px] min-h-[600px]  lg:min-h-[700px]">
          <ScrollArea className="h-[600px]  p-2 m-2">
            <DialogHeader>
              <DialogTitle className="text-start">Course Details</DialogTitle>
              <Separator className="my-2" />
              <DialogDescription>
                <div className="">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex justify-center">
                      <img
                        src={selectedCourse?.image}
                        alt=""
                        className="size-30 lg:size-50 my-4 object-contain"
                      />
                    </div>
                    <div className="text-start space-y-2">
                      <p className="text-xl my-4 font-semibold line-clamp-3">
                        {selectedCourse?.Course}
                      </p>
                      <div className="flex gap-4 justify-start">
                        <p>Instructor:</p>
                        <p>{selectedCourse?.instructor}</p>
                      </div>

                      <div className="flex gap-4 justify-start">
                        <p>Duration:</p>
                        <p>{selectedCourse?.Duration}</p>
                      </div>
                      <div className="flex gap-4 justify-start">
                        <p>Fees:</p>
                        <p>{selectedCourse?.Fees}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <p>Learners: {selectedCourse?.Learners}</p>
                        <p>Reviews: {selectedCourse?.Reviews}</p>
                        <p>Rating: {selectedCourse?.Rating}</p>
                        <p>Certificated: {selectedCourse?.Certificated}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="">
                    <AccordionDemo />
                  </div>
                  {/* Description Section */}

                  {/* OutLine Section */}
                  <div className="">
                    <OutlineDemo />
                  </div>
                  {/* OutLine Section */}

                  {/* Review Section */}
                  <div className="">
                    <CourseReview />
                  </div>
                  {/* Review Section */}
                </div>
              </DialogDescription>
            </DialogHeader>
          </ScrollArea>
          <div className="grid grid-cols-2 gap-2">
            <Button>Rate here </Button>
            <Button>Review </Button>
            <Button>Add to Cart </Button>
            <Button>Enroll Now ! </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogBox;
