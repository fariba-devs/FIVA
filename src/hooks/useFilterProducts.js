import { useMemo } from "react";

export const useFilterProducts = (products, activeFilters) => {
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const {
        categories,
        tags,
        productsList,
        price,
        title,
        description,
        brand,
      } = product;

      // ⭐ 1. فیلتر سرچ - جستجو در نام، توضیحات، برند
      const searchMatch =
        !activeFilters.search ||
        title?.toLowerCase().includes(activeFilters.search.toLowerCase()) ||
        description
          ?.toLowerCase()
          .includes(activeFilters.search.toLowerCase()) ||
        brand?.toLowerCase().includes(activeFilters.search.toLowerCase());

      const categoryMatch =
        activeFilters.category === "All" ||
        categories?.name === activeFilters.category;

      const tagMatch = !activeFilters.tag || tags?.name === activeFilters.tag;

      const priceMatch =
        price >= activeFilters.minPrice && price <= activeFilters.maxPrice;

      const productListMatch =
        !activeFilters.productList ||
        productsList?.name === activeFilters.productList;

      return (
        searchMatch &&
        categoryMatch &&
        tagMatch &&
        priceMatch &&
        productListMatch
      );
    });
  }, [products, activeFilters]);

  return filteredProducts;
};
