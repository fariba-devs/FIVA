import { useQuery } from "@tanstack/react-query";
import { apiProductById } from "../services/apiProductById.js";

export function useProduct(productId, withRelations = false) {
  const {
    data: product = {},
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["product", productId, withRelations],
    queryFn: () => apiProductById(productId, { withRelations }),
    enabled: !!productId, // فقط وقتی productId موجوده اجرا بشه
  });

  return { isLoading, product, error };
}
