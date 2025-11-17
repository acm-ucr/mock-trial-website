import FAQQuestionsCard from "@/components/faqs/FAQQuestionsCard";

interface FAQQuestion {
  question: string;
  answer: string;
}
interface FAQProps {
  faqData: FAQQuestion[];
}

const FAQQuestions = ({ faqData }: FAQProps) => {
  return (
    <div className="flex flex-col gap-6 py-8">
      {faqData.map((q) => (
        <FAQQuestionsCard item={q} />
      ))}
    </div>
  );
};

export default FAQQuestions;
