const ProductPrice = ({ product }) => {
  return (
    <div className="flex items-center gap-4">
      {/* Price & Description */}
      <span className="text-4xl font-bold text-gray-900">
        ${product?.price}
      </span>

      <span className="text-2xl text-gray-500 line-through">
        ${(product?.price * 1.5).toFixed(2)}
      </span>

      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
        Save 33%
      </span>
    </div>
  );
};

export default ProductPrice;
