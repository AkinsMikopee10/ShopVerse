import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ category, currentProductId }) => {
  const { data, isLoading, isError } = useProducts({
    category,
  });

  if (isLoading) {
    return (
      <section className="mx-auto mt-16 max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight">You may also like</h2>

        <p className="mt-4 text-sm text-gray-400">Loading related products...</p>
      </section>
    );
  }

  if (isError) {
    return null;
  }

  const products = (data?.products ?? data ?? []).filter(
    (relatedProduct) => relatedProduct._id !== currentProductId
  );

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto mt-16 max-w-7xl">
      <h2 className="text-2xl font-bold tracking-tight">You may also like</h2>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {products.map((relatedProduct) => (
          <ProductCard key={relatedProduct._id} product={relatedProduct} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
