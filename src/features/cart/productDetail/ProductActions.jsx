// features/product/components/ProductActions.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductActions = ({ cartItem, onAddOrUpdate }) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4 pt-4">
      <button
        onClick={onAddOrUpdate}
        className="flex-1 px-7 py-2 md:px-8 md:py-4 bg-gray-900 text-white font-semibold whitespace-nowrap rounded-lg hover:bg-gray-800 transition-colors"
      >
        {cartItem ? "Update Cart" : "Add to Cart"}
      </button>
      <button
        onClick={() => navigate("/checkout")}
        className="flex-1 px-7 py-2 md:px-8 md:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductActions;
