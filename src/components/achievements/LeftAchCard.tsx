"use client";

import Image, { StaticImageData } from "next/image";

interface Properties {
  image: StaticImageData;
  text: string;
}

const LeftAchCard = ({ image, text }: Properties) => {
  return (
    <div className="grid h-[65vh] grid-cols-2">
      <div className="relative">
        <Image
          src={image}
          alt="Achievement Image"
          fill
          className="object-cover"
        />
      </div>

      <div className="bg-mocktrial-blue flex items-center justify-center text-white">
        <p className="px-6 text-center text-4xl leading-tight font-semibold tracking-wide">
          {text}
        </p>
      </div>
    </div>
  );
};

export default LeftAchCard;
