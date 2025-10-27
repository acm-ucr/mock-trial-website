import { IoIosArrowForward } from "react-icons/io";

interface FAQQuestion {
  question: string;
}

interface FAQProps {
  faqData: FAQQuestion[];
}

const FAQQuestions = ({ faqData }: FAQProps) => {
  return (
    <div className="bg-mocktrial-seablue text-mocktrial-blue border-mocktrial-blue mx-auto flex w-1/2 rounded-xl border-8 p-5">
      {faqData.map((item, index) => (
        <div key={item.id ?? index} className="flex w-full items-center py-2">
          <span className="text-lg font-medium">{item.question}</span>
          <IoIosArrowForward className="ml-auto h-10 w-10" />
        </div>
      ))}
    </div>
  );
};

export default FAQQuestions;
