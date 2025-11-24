"use client";
import BoardCard from "./BoardCard";
import { boardInfo } from "@/data/boardinfo";
import { motion } from "motion/react";

const Board = () => {
  return (
    <div className="mt-20 mr-20 ml-20 grid grid-cols-1 justify-items-center text-center lg:grid-cols-2">
      {boardInfo.map((CARD, index) => (
        <div key={index}>
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            className="hidden lg:block"
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BoardCard
              key={index}
              name={CARD.name}
              title={CARD.title}
              image={CARD.image}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            className="block lg:hidden"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BoardCard
              key={index}
              name={CARD.name}
              title={CARD.title}
              image={CARD.image}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};
export default Board;
