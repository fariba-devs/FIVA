import React from "react";
import ProductCard from "../bestSellingProducts/ProductCard.jsx";
import Pagination from "./Pagination.jsx";
import ProductSidebar from "./ProductSidebar.jsx";
import Loading from "../../components/ui/Loading.jsx";
import { useProductGrid } from "./useProductGrid.jsx";

const ProductGrid = () => {
  const {
    products,
    isLoading,
    currentProducts,
    totalPages,
    currentPage,
    setSortBy,
    startIndex,
    endIndex,
    sortBy,
    filters,
    searchParams,
    setSearchParams,
    handlePageChange,
  } = useProductGrid();

  if (isLoading) return <Loading />;

  return (
    <section
      aria-label="ProductGrid"
      className="min-h-screen py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8"
    >
      {/* Main Content */}
      <main className="md:col-span-3">
        {/* Filter and Sort Header */}
        <div className="flex flex-row justify-between items-center mb-4 gap-4">
          <div className="text-light-dark font-light text-lg">
            <p>
              Showing {startIndex + 1}-{Math.min(endIndex, products.length)} of{" "}
              {products.length} results
            </p>
          </div>
          {/* Sort ******************************************************************/}
          <div className="w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-auto text-lg px-4 py-2 appearance-none focus:outline-none"
            >
              <option value="">Default sorting</option>
              <option value="name-asc">Name (A - Z)</option>
              <option value="name-desc">Name (Z - A)</option>
              <option value="price-asc">Price (Low-High)</option>
              <option value="price-desc">Price (High-Low)</option>
            </select>
          </div>
        </div>

        {/* Show currentProducts ***************************************************/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination ******************************************************************/}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>

      {/* Sidebar : Search Bar & filter *************************************************/}
      <ProductSidebar
        filters={filters}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </section>
  );
};

export default ProductGrid;
