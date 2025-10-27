import { IoIosArrowForward } from "react-icons/io";

interface FAQQuestion {
  question: string;
  id?: string;
}

interface FAQProps {
  faqData: FAQQuestion[];
}

const FAQItem: React.FC<{ item: FAQQuestion }> = ({ item }) => (
  <div className="flex w-full items-center py-2">
    <p className="text-mocktrial-blue pl-4 text-3xl font-bold">
      {item.question}
    </p>
    <IoIosArrowForward className="ml-auto h-10 w-10" />
  </div>
);

const FAQQuestions = ({ faqData }: FAQProps) => {
  return (
    <div className="flex flex-col gap-6 py-8">
      {faqData.map((q) => (
        <div
          className="bg-mocktrial-seablue text-mocktrial-blue border-mocktrial-blue mx-auto my-0.5 flex w-1/2 rounded-xl border-8 p-5 last:mb-12"
          key={(q as FAQQuestion).id ?? q.question}
        >
          <FAQItem item={q as FAQQuestion} />
        </div>
      ))}
    </div>
  );
};

export default FAQQuestions;
