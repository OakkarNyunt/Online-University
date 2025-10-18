import CarouselDemo from "@/components/Custom-Components/Main/Motto&Carousel/Carousel";
import { Button } from "@/components/ui/button";

import { TiPen } from "react-icons/ti";

const MottoCarouselSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 lg:mt-8 z-0 ">
        <div className="flex relative  justify-center items-center border-2 rounded-2xl backdrop-blur-sm">
          <div className="space-y-6 p-16 ">
            <div className="absolute top-4 right-4">
              <Button className="">
                <TiPen />
                Enroll Now !
              </Button>
            </div>
            <div className="flex gap-6 items-center">
              <p className="text-xl md:text-3xl">Join</p>
              <p className="text-blue-600 text-3xl md:text-5xl"> Today,</p>
            </div>
            <div className="flex gap-6 items-center">
              <p className="text-xl md:text-3xl">Learn</p>
              <p className="text-orange-500 text-2xl md:text-5xl"> Every Day</p>
            </div>
          </div>
        </div>

        <div className="">
          <CarouselDemo />
        </div>
      </div>
    </div>
  );
};

export default MottoCarouselSection;
