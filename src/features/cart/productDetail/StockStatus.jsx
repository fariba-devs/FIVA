import React from "react";

const StockStatus = ({ stock }) => {
  return (
    <div>
      {stock && (
        <div className="flex items-center gap-2">
          <div
            className={`w-3 h-3 rounded-full ${
              stock > 10 ? "bg-green-500" : "bg-orange-500"
            }`}
          ></div>
          <span className="text-sm text-gray-600">
            {stock > 10 ? "In Stock" : `Only ${stock} left in stock`}
          </span>
        </div>
      )}
    </div>
  );
};

export default StockStatus;
