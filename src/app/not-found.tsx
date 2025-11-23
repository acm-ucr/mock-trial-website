"use client";
import Link from "next/link";
import { motion } from "motion/react";

const moveUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const grow = {
  whileHover: { scale: 1.05 },
};

const NotFound = () => {
  return (
    <div className="bg-mocktrial-lightblue text-mocktrial-darkblue relative flex h-screen w-screen flex-col items-center sm:gap-1 md:gap-2 lg:gap-3">
      <div className="bg-mocktrial-darkblue relative top-1/18 h-1/8 w-full" />
      <motion.div
        {...moveUp}
        className="flex h-2/3 flex-col justify-center gap-2 text-center sm:gap-3 md:gap-4 lg:gap-6"
      >
        <p className="relative mt-3 text-6xl font-bold sm:mt-4 sm:text-7xl md:mt-5 md:text-8xl lg:mt-6 lg:text-9xl">
          404
        </p>
        <p className="mb-3 text-4xl font-bold sm:mb-4 sm:text-5xl md:mb-5 md:text-6xl lg:mb-6 lg:text-7xl">
          Page not found
        </p>
        <motion.div {...grow}>
          <Link
            href="/"
            className="bg-mocktrial-darkblue rounded-md px-10 py-1 text-2xl font-bold text-white sm:rounded-lg sm:px-12 sm:text-3xl md:rounded-xl md:px-16 md:py-2 md:text-4xl lg:rounded-2xl lg:px-20 lg:text-5xl"
          >
            HOME
          </Link>
        </motion.div>
      </motion.div>

      <div className="bg-mocktrial-darkblue absolute bottom-0 flex h-1/8 w-full" />
    </div>
  );
};

export default NotFound;
