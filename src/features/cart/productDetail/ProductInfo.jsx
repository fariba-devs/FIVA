// features/product/components/ProductInfo.jsx
import React from "react";

const ProductInfo = ({ product }) => {
  return (
    <div className="border-t pt-6 space-y-3 text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <span className="font-semibold">SKU:</span>
        <span>{product?.id}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-semibold">Category:</span>
        <span>{product?.category}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-semibold">Free shipping:</span>
        <span>On orders over $50</span>
      </div>
    </div>
  );
};

export default ProductInfo;
