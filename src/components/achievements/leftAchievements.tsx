"use client";

import Image, { StaticImageData } from "next/image";

interface LeftAchievementsProps {
  image: StaticImageData;
  text: string;
  size: number;
}

const LeftAchievements = ({ image, text, size }: LeftAchievementsProps) => {
  return (
    <div className="bg-mocktrial-blue flex h-full w-full flex-row text-white">
      <div className="relative w-2/3">
        <Image src={image} alt={text} className="object-cover" />
      </div>

      <div className="flex w-2/3 items-center justify-center text-center">
        <div style={{ fontSize: `${size}px` }} className="font-semibold">
          {text}
        </div>
      </div>
    </div>
  );
};

export default LeftAchievements;
