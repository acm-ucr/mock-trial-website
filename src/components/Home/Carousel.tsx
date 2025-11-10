"use client";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Photo {
  src: StaticImageData;
  alt: string;
}

interface CarouselProps {
  photos: Photo[];
}

const CarouselCSA = ({ photos }: CarouselProps) => {
  const [currIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) {
      console.log("API is not initialized yet.");
      return;
    }

    const initialIndex = api.selectedScrollSnap();
    setCurrentIndex(initialIndex);
    console.log(`Initial index set: ${initialIndex}`);

    const onSelect = () => {
      const newIndex = api.selectedScrollSnap();
      console.log(`Carousel index changed: ${newIndex}`);
      setCurrentIndex(newIndex);
    };

    console.log("Adding event listener for 'select' event.");
    api.on("select", onSelect);

    return () => {
      console.log("Removing event listener for 'select' event.");
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="embla bg-mocktrial-lightblue relative flex flex-col items-center justify-center overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          watchDrag: false,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
        className="w-[100%] sm:w-[125%] md:w-[165%]"
        setApi={setApi}
      >
        <CarouselContent>
          {photos.map(({ src, alt }, index) => (
            <CarouselItem
              key={index}
              className="flex basis-full justify-center md:basis-1/3"
            >
              <div className="md:h=[40vh] relative h-[30vh] w-[100vh] overflow-hidden rounded-lg sm:h-[35vh] sm:w-[110vh] md:w-[125vh] lg:h-[52vh] lg:w-[150vw]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className={cn(
                    "object-cover", // ensures each image fills the box without distortion
                    index === (currIndex - 1 + photos.length) % photos.length
                      ? "clip-left"
                      : "",
                    index === (currIndex + 1) % photos.length
                      ? "clip-right"
                      : "",
                  )}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 transform py-4">
          {photos.map((_, index) => (
            <button
              key={index}
              className={`mx-1 h-5 w-5 rounded-full ${currIndex === index ? "bg-mocktrial-blue/90" : "bg-mocktrial-lightblue/50"}`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselCSA;
