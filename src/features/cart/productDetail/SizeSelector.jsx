import React from "react";

const SizeSelector = ({ sizes, selectedSize, onSelect }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Size: {selectedSize}
      </h3>
      <div className="flex gap-1 md:gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            className={`text-sm sm:text-base px-2.5 py-2 sm:px-5 sm:py-3 border-2 transition-all font-medium min-w-[60px] ${
              selectedSize === size
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
