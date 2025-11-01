import { useState, useMemo, useEffect } from "react";
import { useProducts } from "../../hooks/useProducts.jsx";
import { useSearchParams } from "react-router-dom";
import { useSortProducts } from "../filters/useSortProducts.jsx";
import { useFilterProducts } from "../filters/useFilterProducts.jsx";

export const useProductGrid = (productsPerPage = 9) => {
  const { products, isLoading } = useProducts(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");

  //* Reading parameters (filter) from the URL ******************************************************************/
  const activeFilters = useMemo(() => {
    const priceRange = searchParams.get("price");
    let minPrice = 0,
      maxPrice = Infinity;
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number); //["100", "500"].map(Number)  نتیجه: [100, 500]
      minPrice = min;
      maxPrice = max;
    }
    return {
      search: searchParams.get("search") || "", // ⭐ اضافه شد
      category: searchParams.get("category") || "All",
      tag: searchParams.get("tag"),
      productList: searchParams.get("productList"),
      minPrice,
      maxPrice,
    };
  }, [searchParams]);

  // use hock filter & hock sort ******************************************************************
  const filteredProducts = useFilterProducts(products, activeFilters);
  const sortedProducts = useSortProducts(filteredProducts, sortBy);

  // Pagination ******************************************************************
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = Math.min(
    startIndex + productsPerPage,
    sortedProducts.length,
  );
  const currentProducts = useMemo(
    () => sortedProducts.slice(startIndex, endIndex),
    [sortedProducts, startIndex, endIndex],
  );
  // Handle pagination button clicks
  const handlePageChange = (newPage) => {
    if (newPage === "..." || newPage === currentPage) return;
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // ✅ Reset current page when filters (URL params) change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchParams]);

  //*******************************************************************************
  return {
    products,
    isLoading,
    currentProducts,
    totalPages,
    currentPage,
    startIndex,
    endIndex,
    setSortBy,
    sortBy,
    activeFilters,
    searchParams,
    setSearchParams,
    handlePageChange,
  };
};
