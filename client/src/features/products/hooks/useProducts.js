import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productApi";

export function useProducts(params = {}) {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => getProducts(params),
  });
}
