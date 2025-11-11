"use client";

import Image, { StaticImageData } from "next/image";

type Properties = {
  image: StaticImageData;
  text: string;
};

const LeftAchMobileCard = ({ image, text }: Properties) => {
  return (
    <div className="ring-mocktrial-yellow bg-mocktrial-blue mr-15 ml-15 grid h-[20vh] grid-cols-3 overflow-hidden rounded-3xl text-white shadow-2xl ring-8">
      <div className="relative col-span-1 rounded-l-3xl">
        <Image
          src={image}
          alt="Achievement Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <p className="px-6 text-center text-sm sm:text-lg md:text-2xl lg:text-3xl leading-tight font-semibold tracking-wide">
          {text}
        </p>
      </div>
    </div>
  );
};

export default LeftAchMobileCard;
