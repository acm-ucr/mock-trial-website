import { Accordion } from "@/components/Accordion";
import Header from "@/components/Header";
import Questions from "@/data/Questions";
import FAQQuestions from "@/components/faqs/FAQQuestionsCard";

const FAQS = () => {
  return (
    <div className="bg-mocktrial-lightblue">
      <Header title="Frequently Asked Questions" />

      <Accordion
        type="single"
        collapsible
        className="mx-auto flex flex-col gap-6 py-8"
      >
        {Questions.map((item) => (
          <FAQQuestions key={item.question} item={item} />
        ))}
      </Accordion>
    </div>
  );
};

export default FAQS;
