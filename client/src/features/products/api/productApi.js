import api from "../../../services/api";

export async function getProductBySlug(slug) {
  const response = await api.get(`/products/slug/${slug}`);

  return response.data.data;
}

export async function getProducts(params = {}) {
  const response = await api.get("/products", {
    params,
  });

  return response.data.data;
}
