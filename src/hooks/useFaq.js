import { useQuery } from "@tanstack/react-query";
import { getFaqs } from "../services/apiFaq.js";

export function useFaqs() {
  const {
    data: Faqs,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["Faqs"],
    queryFn: getFaqs,
  });
  return { isLoading, Faqs, error };
}
