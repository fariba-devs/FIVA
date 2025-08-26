import { useCallback, useState } from "react";
import FAQItem from "./FAQItem.jsx";

const faqs = [
  {
    question: "I got my vase but some items are broken, what to do?",
    answer:
      "If items arrived broken, contact our support within 48 hours with a photo for a replacement or refund.",
  },
  {
    question: "Can I return them if I don't like the items I bought?",
    answer:
      "Yes, you can return unused items within 14 days, except for sale items or special orders.",
  },
  {
    question: "Will we get a discount if we order many vases?",
    answer:
      "Yes, bulk orders may qualify for discounts. Contact us for more details.",
  },
  {
    question: "Are there refunds for sale items or special orders?",
    answer:
      "Sale items and special orders are final sale and cannot be refunded.",
  },
  {
    question: "How long will it take to get my first order?",
    answer:
      "Most orders are processed in 2–5 business days, plus shipping time.",
  },
];

const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

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

  return (
    <section className=" py-50 ">
      <div className="container max-w-4xl mx-auto px-4">
        <h3 className="text-4xl md:text-5xl text-center mb-8 font-family-italiana">
          Some FAQs
        </h3>
        <div className="space-y-4 divide-y divide-gray-500">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
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

export default FAQSection;
