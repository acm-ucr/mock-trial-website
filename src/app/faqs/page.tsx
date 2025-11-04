import Header from "@/components/Header";
import FAQQuestions from "@/components/faqs/FAQQuestions";
import Questions from "@/data/Questions";

const FAQS = () => {
  return (
    <div className="bg-mocktrial-lightblue">
      <Header title="Frequently Asked Questions" />
      <FAQQuestions faqData={Questions} />
    </div>
  );
};

export default FAQS;
