import { useQuery } from "@tanstack/react-query";
import { apiProducts } from "../services/apiProducts.js";

export function useProducts(withRelations = false) {
  const {
    data: products = [],
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["products", withRelations], // ✅ اضافه کردن withRelations به queryKey
    queryFn: () => apiProducts({ withRelations }), // ✅ تبدیل به arrow function
  });

  console.log("🔥 useProducts hook:", {
    productsCount: products.length,
    isLoading,
    hasError: !!error,
    firstProduct: products[0],
  });

  return { isLoading, products, error };
}
