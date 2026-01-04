"use client";
import LeftAchCard from "@/components/Achievements/LeftAchCard";
import RightAchCard from "@/components/Achievements/RightAchCard";
import LeftAchMobileCard from "@/components/Achievements/LeftAchMobileCard";
import RightAchMobileCard from "@/components/Achievements/RightAchMobileCard";
import AchievementsData from "@/data/AchievementsData";
import { motion } from "motion/react";

const fadeInFromBottomEven = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInFromBottomOdd = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AchievementsGrid = () => {
  return (
    <div className="bg-mocktrial-lightblue relative grid grid-cols-1 overflow-hidden">
      <div className="mt-10 block md:hidden" />
      {AchievementsData.map(({ image, text }, index) => (
        <div key={index}>
          <div className="mt-13 block md:hidden">
            {index % 2 === 0 ? (
              <LeftAchMobileCard image={image} text={text} index={index} />
            ) : (
              <RightAchMobileCard image={image} text={text} index={index} />
            )}
          </div>

          <div className="hidden md:block">
            {index % 2 === 0 ? (
              <motion.div
                variants={fadeInFromBottomEven}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
              >
                <LeftAchCard image={image} text={text} />
              </motion.div>
            ) : (
              <motion.div
                variants={fadeInFromBottomOdd}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
              >
                <RightAchCard image={image} text={text} />
              </motion.div>
            )}
          </div>
        </div>
      ))}
      <div className="mb-45 block md:hidden" />
    </div>
  );
};

export default AchievementsGrid;
