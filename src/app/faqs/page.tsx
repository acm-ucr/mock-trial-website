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
          <div
            key={index}
            className="bg-mocktrial-seablue text-mocktrial-blue border-mocktrial-blue mx-auto my-0.5 flex w-1/2 flex-col rounded-xl border-8 p-5 last:mb-12"
          >
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="w-full"
            >
              <AccordionTrigger className="flex w-full items-center py-2">
                <p className="text-mocktrial-blue pl-4 text-3xl font-bold">
                  {item.question}
                </p>
              </AccordionTrigger>
              <AccordionContent className="text-mocktrial-blue px-4 py-2 text-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQS;
