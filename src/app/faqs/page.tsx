"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";

import Header from "@/components/Header";
import Questions from "@/data/Questions";

const FAQS = () => {
  return (
    <div className="bg-mocktrial-lightblue">
      <Header title="Frequently Asked Questions" />
      <Accordion
        type="single"
        collapsible
        className="mx-auto flex flex-col gap-6 py-8"
      >
        {Questions.map((item, index) => (
          <motion.div
            key={index}
            className="bg-mocktrial-seablue text-mocktrial-blue border-mocktrial-blue mx-auto my-0.5 flex w-2/3 flex-col rounded-xl border-6 p-5 last:mb-26 md:last:mb-12 lg:w-3xl lg:border-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="w-full"
            >
              <AccordionTrigger className="flex w-full items-center py-2">
                <p className="text-mocktrial-blue pl-4 text-xl font-bold md:text-2xl lg:text-3xl">
                  {item.question}
                </p>
              </AccordionTrigger>
              <AccordionContent className="text-mocktrial-blue px-4 py-2 text-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQS;
