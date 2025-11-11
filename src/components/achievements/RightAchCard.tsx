"use client";
import Image, { StaticImageData } from "next/image";

type Properties = {
  image: StaticImageData;
  text: string;
};

const RightAchCard = ({ image, text }: Properties) => {
  return (
    <div className="grid h-[65vh] grid-cols-2">
      <div className="bg-mocktrial-blue flex items-center justify-center text-white">
        <p className="px-6 text-center text-sm sm:text-lg md:text-2xl lg:text-3xl leading-tight font-semibold tracking-wide">
          {text}
        </p>
      </div>

      <div className="relative">
        <Image
          src={image}
          alt="Achievement Image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default RightAchCard;
