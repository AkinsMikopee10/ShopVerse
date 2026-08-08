import ProductActions from "./ProductActions";

const ProductInfo = ({ product }) => {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-[#00D4AA]">{product.brand}</p>

      <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm text-gray-300">★ {product.rating}</span>

        <span className="text-sm text-gray-400">({product.reviewCount} reviews)</span>
      </div>

      <p className="mt-6 text-2xl font-bold text-white">₦{product.price}</p>

      <div className="mt-8 space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Description</h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-300">{product.description}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Availability</h2>

          <p className="mt-2 text-sm font-medium text-[#00D4AA]">
            {product.stock > 0 ? "● In stock" : "● Out of stock"}
          </p>
        </div>
      </div>
      <ProductActions stock={product.stock} />
    </div>
  );
};

export default ProductInfo;
