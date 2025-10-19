import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  //   CarouselNext,
  //   CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Reviews } from "@/assets/Data/Reviews";
import {
  Card,
  //   CardAction,
  CardContent,
  //   CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CarouselDemo = () => {
  return (
    <div className="my-8">
      <Carousel
        className=""
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent>
          {/* <ReviewCard /> */}
          {Reviews.map((review) => (
            <CarouselItem>
              <Card className="">
                <CardHeader>
                  <CardTitle>{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-6 text-muted-foreground">
                    {review.review}
                  </p>
                </CardContent>
                <CardFooter className="">{review.Date}</CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselDemo;
