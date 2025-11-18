"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

const transitionRight = (index = 1) => ({
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: index * 0.1 },
  viewport: { once: true },
});

type Properties = {
  image: StaticImageData;
  text: string;
  index?: number;
};

const RightAchMobileCard = ({ image, text, index = 0 }: Properties) => {
  return (
    <motion.div
      variants={transitionRight(index)}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
    >
      <div className="ring-mocktrial-yellow bg-mocktrial-blue mr-15 ml-15 grid h-[20vh] grid-cols-3 overflow-hidden rounded-3xl text-white shadow-2xl ring-8">
        <div className="col-span-2 flex items-center justify-center">
          <p className="px-6 text-center text-sm leading-tight font-semibold tracking-wide sm:text-lg md:text-2xl lg:text-3xl">
            {text}
          </p>
        </div>
        <div className="relative col-span-1 rounded-l-3xl">
          <Image
            src={image}
            alt="Achievement Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default RightAchMobileCard;
