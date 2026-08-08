import { useQuery } from "@tanstack/react-query";
import { getProductBySlug } from "../api/productApi";

export function useProduct(slug) {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: () => getProductBySlug(slug),
    enabled: Boolean(slug),
  });
}
