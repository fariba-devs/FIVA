import { useQuery } from "@tanstack/react-query";
import {
  apiCategories,
  apiProductsList,
  apiTags,
} from "../../services/apiFilters.js";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: apiCategories,
  });
};

export const useTags = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: apiTags,
  });
};

export const useProductsList = () => {
  return useQuery({
    queryKey: ["productsList"],
    queryFn: apiProductsList,
  });
};

// Hook for all fillters ******************************************************************
export const useFilterOptions = () => {
  const categoriesQuery = useCategories();
  const tagsQuery = useTags();
  const productsListQuery = useProductsList();

  return {
    categories: categoriesQuery.data || [],
    tags: tagsQuery.data || [],
    productsList: productsListQuery.data || [],
    isLoading:
      categoriesQuery.isLoading ||
      tagsQuery.isLoading ||
      productsListQuery.isLoading,
    error: categoriesQuery.error || tagsQuery.error || productsListQuery.error,
  };
};
