import { useCallback, useState } from "react";
import FAQItem from "./FAQItem.jsx";
import { useFaqs } from "../../hooks/useFaq.js";
import Loading from "../../components/ui/Loading.jsx";

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const { Faqs, isLoading } = useFaqs();
  // Toggles open/closed state of a FAQ item
  const toggleFAQ = useCallback((index) => {
    setOpenIndexes((prev) => {
      if (prev.includes(index)) {
        // اگر قبلا باز بود، ببندش
        return prev.filter((i) => i !== index);
      } else {
        // اگر بسته بود، بازش کن
        return [...prev, index];
      }
    });
  }, []);

  if (isLoading) return <Loading />;
  return (
    <section aria-label="FAQ" className=" py-50 ">
      <div className="container max-w-4xl mx-auto px-4">
        <h3 className="text-4xl md:text-5xl text-center mb-8 font-italiana">
          Some FAQs
        </h3>
        <div className="space-y-4 divide-y divide-gray-500">
          {Faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              index={index}
              faq={faq}
              isOpen={openIndexes.includes(index)}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
