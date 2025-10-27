import Header from "@/components/Header";
import WhatIsMock from "@/components/faqs/WhatIsMock";
import FAQQuestions from "@/components/faqs/FAQQuestions";
import { Questions } from "@/data/Questions";

const FAQS = () => {
  return (
    <div className="bg-mocktrial-lightblue">
      <Header title="Frequently Asked Questions" />

      <WhatIsMock />
      <FAQQuestions faqData={Questions} />
    </div>
  );
};

export default FAQS;
