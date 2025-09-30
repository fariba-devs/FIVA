import React, { useState } from "react";
import ProductCard from "../bestSellingProducts/ProductCard.jsx";
import Pagination from "./Pagination.jsx";
import ProductSidebar from "./ProductSidebar.jsx";
import OurStore from "../ourStore/OurStore.jsx";
import { useProducts } from "../bestSellingProducts/useProducts.jsx";
import Loading from "../../components/ui/Loading.jsx";

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { products, isLoading } = useProducts();

  const [sortBy, setSortBy] = useState("");

  const PRODUCTS_PER_PAGE = 9;

  if (isLoading) return <Loading />;

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // اختیاری: scroll به بالای صفحه
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
              <option value="rating-desc">Rating (Highest)</option>
              <option value="rating-asc">Rating (Lowest)</option>
              <option value="model-asc">Model (A - Z)</option>
              <option value="model-desc">Model (Z - A)</option>
            </select>
          </div>
        </div>

        {/* bestSellingProducts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>

      {/* Sidebar */}
      <ProductSidebar />
    </section>
  );
};

export default ProductGrid;
