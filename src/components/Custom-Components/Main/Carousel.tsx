import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselNext,
  //   CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import img1 from "@/assets/images/onlineUni-carousel.png";

const CarouselDemo = () => {
  return (
    <div>
      <Carousel
        className="z-0"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <img src={img1} alt="" sizes="50" />
          </CarouselItem>
          <CarouselItem>
            <img src={img1} alt="" sizes="50" />
          </CarouselItem>
          <CarouselItem>
            <img src={img1} alt="" sizes="50" />
          </CarouselItem>
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default CarouselDemo;
