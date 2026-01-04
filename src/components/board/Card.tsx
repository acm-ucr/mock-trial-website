"use client";
import Cards from "./Cards";
import boardInfo from "@/data/BoardInfo";
import { motion } from "motion/react";

const Card = () => {
  return (
    <div className="bg-mocktrial-lightblue pt-35 sm:pt-37 md:pt-40 lg:pt-43">
      <div className="mr-20 ml-20 grid grid-cols-1 justify-items-center gap-y-30 pb-26 text-center md:pb-0 lg:grid-cols-2">
        {boardInfo.map(({ name, title, image, scale }, index) => (
          <div key={index}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              className="hidden lg:block"
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Cards
                key={index}
                name={name}
                title={title}
                image={image}
                scale={scale}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              className="block lg:hidden"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Cards
                key={index}
                name={name}
                title={title}
                image={image}
                scale={scale}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
