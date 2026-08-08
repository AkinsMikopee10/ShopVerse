import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct.js";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductBreadcrumb from "../components/ProductBreadcrumb";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetailsPage = () => {
  const { slug } = useParams();

  const { data: product, isLoading, isError } = useProduct(slug);

  if (isLoading) {
    return <main>Loading product...</main>;
  }

  if (isError) {
    return <main>Unable to load product.</main>;
  }

  return (
    <main className="min-h-screen bg-[#0A0F1E] px-4 py-8 text-white">
      <ProductBreadcrumb productName={product.name} />

      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-start">
        <ProductGallery images={product.images} productName={product.name} />

        <ProductInfo product={product} />
      </section>

      <RelatedProducts category={product.category} currentProductId={product._id} />
    </main>
  );
};

export default ProductDetailsPage;
