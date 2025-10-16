import { useMemo } from "react";

export const useFilterProducts = (products, activeFilters) => {

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const { categories, tags, productsList, price } = product;

      const categoryMatch =
        activeFilters.category === "All" ||
        categories?.name === activeFilters.category;

      const tagMatch = !activeFilters.tag || tags?.name === activeFilters.tag;

      const priceMatch =
        price >= activeFilters.minPrice && price <= activeFilters.maxPrice;

      const productListMatch =
        !activeFilters.productList ||
        productsList?.name === activeFilters.productList;

      return categoryMatch && tagMatch && priceMatch && productListMatch;
    });
  }, [products, activeFilters]);

  return filteredProducts;
};
