import { useState, useMemo, useEffect } from "react";
import { useProducts } from "../bestSellingProducts/useProducts.jsx";
import { useSearchParams } from "react-router-dom";

export const useProductGrid = (productsPerPage = 9) => {
  const { products, isPending } = useProducts(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");

  const filters = useMemo(() => {
    const priceRange = searchParams.get("price");
    let minPrice = 0,
      maxPrice = Infinity;

    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      minPrice = min;
      maxPrice = max;
    }

    const filtersObj = {
      category: searchParams.get("category") || "All",
      tag: searchParams.get("tag"),
      productList: searchParams.get("productList"),
      minPrice,
      maxPrice,
    };

    console.log("🔍 Active Filters:", filtersObj);
    return filtersObj;
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    console.log("🔍 Starting filter with", products.length, "products");
    console.log("🔍 Active filters:", filters);

    const filtered = products.filter((product) => {
      // Debug هر محصول
      const debugInfo = {
        title: product.title,
        categoryName: product.categories?.name,
        tagName: product.tags?.name,
        productListName: product.productsList?.name,
        price: product.price,
      };

      // فیلتر دسته‌بندی - استفاده از categories.name
      if (filters.category !== "All") {
        const categoryName = product.categories?.name;
        if (categoryName !== filters.category) {
          console.log("❌ Filtered out by category:", debugInfo);
          return false;
        }
      }

      // فیلتر تگ - استفاده از tags.name
      if (filters.tag) {
        const tagName = product.tags?.name;
        if (tagName !== filters.tag) {
          console.log("❌ Filtered out by tag:", debugInfo);
          return false;
        }
      }

      // فیلتر قیمت
      if (
        product.price < filters.minPrice ||
        product.price > filters.maxPrice
      ) {
        console.log(
          "❌ Filtered out by price:",
          debugInfo,
          "Range:",
          filters.minPrice,
          "-",
          filters.maxPrice,
        );
        return false;
      }

      // فیلتر لیست محصولات - استفاده از productsList.name
      if (filters.productList) {
        const productListName = product.productsList?.name;
        if (productListName !== filters.productList) {
          console.log("❌ Filtered out by productList:", debugInfo);
          return false;
        }
      }

      console.log("✅ Product passed all filters:", debugInfo);
      return true;
    });

    console.log("✅ Final Filtered Products:", filtered.length);
    return filtered;
  }, [products, filters]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    switch (sortBy) {
      case "name-asc":
        return sorted.sort((a, b) => a.title.localeCompare(b.title)); // ✅ تغییر از name به title
      case "name-desc":
        return sorted.sort((a, b) => b.title.localeCompare(a.title)); // ✅ تغییر از name به title
      case "price-asc":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-desc":
        return sorted.sort((a, b) => b.price - a.price);
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

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

  console.log("📄 Current Page Products:", currentProducts.length);
  console.log("📄 Current Page:", currentPage, "/", totalPages);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchParams]);

  const handlePageChange = (newPage) => {
    if (newPage === "..." || newPage === currentPage) return;
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    products,
    isPending,
    currentProducts,
    totalPages,
    currentPage,
    startIndex,
    endIndex,
    setSortBy,
    sortBy,
    filters,
    searchParams,
    setSearchParams,
    handlePageChange,
  };
};
