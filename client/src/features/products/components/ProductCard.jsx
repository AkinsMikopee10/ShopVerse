import { Link } from "react-router-dom";
import Card from "../../../components/ui/Card";

const ProductCard = ({ product }) => {
  const image = product.images?.[0];

  return (
    <Card className="overflow-hidden p-0">
      <Link to={`/products/${product.slug}`} className="block">
        <div className="aspect-square overflow-hidden bg-[var(--surface)]">
          {image ? (
            <img
              src={image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-gray-400">
              No image available
            </div>
          )}
        </div>

        <div className="p-4">
          {product.brand && <p className="text-xs font-medium text-[#00D4AA]">{product.brand}</p>}

          <h3 className="mt-1 truncate text-base font-semibold text-white">{product.name}</h3>

          <p className="mt-2 text-lg font-bold text-white">
            ₦
            {Number(product.price).toLocaleString("en-NG", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>

          <div className="mt-2 flex items-center gap-1 text-xs text-gray-400">
            <span>★</span>
            <span>{product.rating?.toFixed(1) ?? "0.0"}</span>
            <span>({product.reviewCount ?? 0})</span>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ProductCard;
