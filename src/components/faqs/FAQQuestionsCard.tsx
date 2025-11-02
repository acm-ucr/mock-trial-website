import { IoIosArrowForward } from "react-icons/io";

interface FAQQuestion {
  question: string;
  id?: string;
}

const FAQQuestionsCard: React.FC<{ item: FAQQuestion }> = ({
  item: { question },
}) => (
  <div className="flex w-full items-center py-2">
    <p className="text-mocktrial-blue pl-4 text-3xl font-bold">{question}</p>
    <IoIosArrowForward className="ml-auto h-10 w-10" />
  </div>
);

export default FAQQuestionsCard;
