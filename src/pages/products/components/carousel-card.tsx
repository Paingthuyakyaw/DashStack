import { carouselData } from "@/common/fake-data/products";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const CarouseCard = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[plugin.current]}
      className=" relative"
    >
      <CarouselContent>
        {carouselData.map((item) => (
          <CarouselItem key={item.id}>
            <div className=" md:block hidden">
              <AspectRatio ratio={16 / 4}>
                <img
                  src={item.img}
                  className=" h-full  w-full object-cover object-center rounded-lg "
                />
              </AspectRatio>
            </div>

            <div className=" md:hidden">
              <AspectRatio className=" md:hidden " ratio={16 / 6}>
                <img
                  src={item.img}
                  className=" h-full  w-full object-cover object-center rounded-lg "
                />
              </AspectRatio>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" z-20 left-4 " />
      <CarouselNext className=" z-20 right-4" />
    </Carousel>
  );
};

export default CarouseCard;
