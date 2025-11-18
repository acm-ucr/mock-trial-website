"use client";

import { motion } from "motion/react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";

interface FAQQuestion {
  question: string;
  answer: string;
}

const faqAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const FAQQuestionsCard = ({ item }: { item: FAQQuestion }) => {
  return (
    <motion.div
      variants={faqAnimation}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-mocktrial-seablue text-mocktrial-blue border-mocktrial-blue mx-auto my-0.5 flex w-4/5 flex-col rounded-lg border-4 p-3 last:mb-20 md:w-2/3 md:border-5 md:last:mb-4 lg:border-6"
    >
      <AccordionItem value={`faq-${item.question}`}>
        <AccordionTrigger className="flex w-full items-center py-1.5">
          <p className="text-mocktrial-blue pl-3 text-lg font-semibold md:text-xl lg:text-2xl">
            {item.question}
          </p>
        </AccordionTrigger>
        <AccordionContent className="text-mocktrial-blue px-3 py-1.5 text-base md:text-lg">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
};

export default FAQQuestionsCard;
