import React from "react";

const QuantitySelector = ({ quantity, maxQuantity, onChange }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
      <div className="flex items-center gap-4">
        <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
          <button
            onClick={() => onChange(-1)}
            className="px-3 py-2 sm:px-5 sm:py-3 hover:bg-gray-100 transition-colors font-semibold text-lg"
            disabled={quantity <= 1}
          >
            −
          </button>
          <span className="px-3 py-2 sm:px-5 sm:py-3 border-x-2 border-gray-300 font-semibold">
            {quantity}
          </span>
          <button
            onClick={() => onChange(1)}
            className="px-3 py-2 sm:px-5 sm:py-3 hover:bg-gray-100 transition-colors font-semibold text-lg"
            disabled={quantity >= maxQuantity}
          >
            +
          </button>
        </div>
        <span className="px-3 py-2 sm:px-5 sm:py-3 bg-green-100 text-green-700 rounded-full text-sm font-medium">
          Max: {maxQuantity || 10}
        </span>
      </div>
    </div>
  );
};

export default QuantitySelector;
