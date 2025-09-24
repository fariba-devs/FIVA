import { useQuery } from "@tanstack/react-query";
import { getHero } from "../../services/apiHeroSilder.js";

export function useHeroSlider() {
  const {
    data: slides,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["heroSlider"],
    queryFn: getHero,
  });
  return { isLoading, slides, error };
}
