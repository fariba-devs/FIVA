import { useQuery } from "@tanstack/react-query";
import { getProductMasonry } from "../../services/apiProductMasonry.js";

export function useProductMasonry() {
  const {
    data: productMasonry,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["ProductMasonry"],
    queryFn: getProductMasonry,
  });
  return { isLoading, productMasonry, error };
}
