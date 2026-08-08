import { useState } from "react";

const ProductGallery = ({ images = [], productName }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const displayedImage = selectedImage ?? images[0];

  return (
    <section>
      <div className="aspect-square overflow-hidden rounded-xl bg-[#111827]">
        {displayedImage ? (
          <img src={displayedImage} alt={productName} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-gray-400">No image available</p>
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-[#111827]"
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductGallery;
