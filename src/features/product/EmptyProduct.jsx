// components/ui/EmptyState.jsx
const EmptyState = () => {
  return (
      <div className="col-span-full text-center py-20">
        <h3 className="text-2xl font-semibold text-gray-700 mb-3">
          No Products Found
        </h3>
        <p className="text-gray-500">
          We couldn't find any products matching your criteria.
        </p>
      </div>
  );
};

export default EmptyState;