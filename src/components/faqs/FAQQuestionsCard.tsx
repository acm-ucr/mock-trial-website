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
      className="bg-mocktrial-seablue text-mocktrial-blue border-mocktrial-blue mx-auto my-0.5 flex w-4/5 flex-col rounded-xl border-6 p-5 last:mb-26 md:w-2/3 md:border-7 md:last:mb-6 lg:border-8"
    >
      <AccordionItem value={`faq-${item.question}`}>
        <AccordionTrigger className="flex w-full items-center py-2">
          <p className="text-mocktrial-blue pl-4 text-xl font-bold md:text-2xl lg:text-3xl">
            {item.question}
          </p>
        </AccordionTrigger>
        <AccordionContent className="text-mocktrial-blue px-4 py-2 text-lg md:text-xl">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
};

export default FAQQuestionsCard;
