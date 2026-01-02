"use client";
import Link from "next/link";
import { motion } from "motion/react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeInUpDelayed = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.2 },
};

const AboutUs = () => {
  return (
    <div className="bg-mocktrial-lightblue pt-4">
      <motion.div
        {...fadeInUp}
        className="bg-mocktrial-yellow mx-auto w-xs rounded-3xl p-3 sm:w-md md:w-lg lg:w-xl"
      >
        <p className="bg-mocktrial-blue font-mocktrial-montserrat sm:text-md rounded-2xl p-6 text-center text-sm font-semibold text-white md:text-lg lg:text-xl">
          Mock Trial is a competitive team based activity where students
          simulate a real trial. Students act as both the attorneys and
          witnesses in the trial. Students are scored based on their arguments
          and performance.
        </p>
      </motion.div>

      <motion.div
        {...fadeInUpDelayed}
        className="text-mocktrial-darkblue text-center"
      >
        <p className="mb-4 text-xl font-bold sm:mb-6 sm:text-xl md:text-2xl lg:text-3xl">
          To join, email
        </p>

        <Link href="mailto:mocktrialucr@gmail.com" aria-label="Email">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-blaock bg-mocktrial-yellow mb-10 inline-block rounded-full px-6 py-3.5 sm:px-8 sm:py-4 md:px-8 md:py-4 lg:px-10 lg:py-4.5"
          >
            <div className="text-sm font-semibold underline sm:text-base md:text-lg lg:text-xl">
              mocktrialucr@gmail.com
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
};
export default AboutUs;
