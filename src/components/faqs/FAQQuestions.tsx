import FAQQuestionsCard from "@/components/faqs/FAQQuestionsCard";

interface FAQQuestion {
  question: string;
  id?: string;
}
interface FAQProps {
  faqData: FAQQuestion[];
}

const FAQQuestions = ({ faqData }: FAQProps) => {
  return (
    <div className="flex flex-col gap-6 py-8">
      {faqData.map((q) => (
        <div
          className="bg-mocktrial-seablue text-mocktrial-blue border-mocktrial-blue mx-auto my-0.5 flex w-1/2 rounded-xl border-8 p-5 last:mb-12"
          key={q.id ?? q.question}
        >
          <FAQQuestionsCard item={q} />
        </div>
      ))}
    </div>
  );
};

export default FAQQuestions;
