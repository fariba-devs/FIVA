import React from "react";

const ColorSelector = ({ colors, selectedColor, onSelect }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Color: {selectedColor}
      </h3>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onSelect(color)}
            className={`text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 border-2 rounded-lg transition-all font-medium ${
              selectedColor === color
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
