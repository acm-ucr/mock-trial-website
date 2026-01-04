import { Accordion } from "@/components/Accordion";
import Questions from "@/data/Questions";
import FAQQuestionsCard from "@/components/Faqs/FAQQuestionsCard";

const FAQS = () => {
  return (
    <div className="bg-mocktrial-lightblue w-full py-8">
      <Accordion
        type="single"
        collapsible
        className="mx-auto flex w-full flex-col gap-6"
      >
        {Questions.map((item) => (
          <FAQQuestionsCard key={item.question} item={item} />
        ))}
      </Accordion>
    </div>
  );
};

export default FAQS;
