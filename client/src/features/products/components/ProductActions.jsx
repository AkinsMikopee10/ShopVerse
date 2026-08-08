import { useState } from "react";

const ProductActions = ({ stock = 0 }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="mt-8">
      <div className="mb-4 flex items-center gap-3">
        <button
          type="button"
          disabled={stock === 0}
          onClick={() => setQuantity((current) => Math.max(1, current - 1))}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#111827] text-lg text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Decrease quantity"
        >
          −
        </button>

        <span className="min-w-8 text-center text-sm font-semibold">{quantity}</span>

        <button
          type="button"
          disabled={stock === 0 || quantity >= stock}
          onClick={() => setQuantity((current) => Math.min(stock, current + 1))}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#111827] text-lg text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <button
        type="button"
        disabled={stock === 0}
        className="w-full rounded-xl bg-[#6C63FF] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {stock === 0 ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductActions;
