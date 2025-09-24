import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/products.js";

export function useProducts() {
  const {
    data: products,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return { isLoading, products, error };
}
