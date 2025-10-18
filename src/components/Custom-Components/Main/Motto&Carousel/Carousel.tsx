import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselNext,
  //   CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { B1, B2, B3 } from "@/assets/Data/images";

const CarouselDemo = () => {
  return (
    <div>
      <Carousel
        className=""
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem className="bg-amber-600">
            <img src={B1} alt="image" className="size-full object-contain" />
          </CarouselItem>
          <CarouselItem>
            <img src={B2} alt="image" className="size-full object-contain" />
          </CarouselItem>
          <CarouselItem>
            <img src={B3} alt="image" className="size-full object-contain" />
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default CarouselDemo;
