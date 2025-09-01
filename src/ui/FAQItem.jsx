import { memo } from "react";
import ArrowButton from "./ArrowButton.jsx";

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="py-2">
      <h4>
        <button
          className="w-full flex justify-between items-center py-2 text-left text-3xl md:text-3xl font-italiana font-medium text-gray-800 focus:outline-none"
          onClick={onToggle}
        >
          {faq.question}
          <span className="ml-2 text-gray-500 text-lg">
            {isOpen ? (
              <ArrowButton
                direction="up"
                iconType="chevron"
                variant="chevronUpDown"
              />
            ) : (
              <ArrowButton
                direction="down"
                iconType="chevron"
                variant="chevronUpDown"
              />
            )}
          </span>
        </button>
      </h4>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="pb-4 text-lg font-light text-light-dark">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

export default memo(FAQItem);
