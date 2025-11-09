import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";

const ImageGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const navigateImage = (direction) => {
    if (!product || !product.images) return;
    if (direction === "next") {
      setSelectedImage((prev) => (prev + 1) % (product.images.length + 1));
    } else {
      setSelectedImage(
        (prev) =>
          (prev - 1 + product.images.length + 1) % (product.images.length + 1),
      );
    }
  };

  const currentImage =
    selectedImage === 0 ? product.image : product.images?.[selectedImage - 1];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div
        ref={imageRef}
        className="relative overflow-hidden bg-gray-100 cursor-zoom-in h-160"
        onMouseEnter={() => setIsZooming(true)}
        onMouseLeave={() => setIsZooming(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={currentImage}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-200"
          loading="lazy"
          style={
            isZooming
              ? {
                  transform: "scale(2)",
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }
              : {}
          }
        />

        {/* Navigation Arrows */}
        {product.images && product.images.length > 0 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-4">
        <button
          onClick={() => setSelectedImage(0)}
          className={`relative overflow-hidden border-2 transition-all ${
            selectedImage === 0
              ? "border-gray-800"
              : "border-gray-200 hover:border-gray-400"
          }`}
        >
          <img
            src={product?.image}
            alt="Main"
            className="w-full h-24 object-cover"
          />
        </button>
        {product?.images?.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx + 1)}
            className={`relative overflow-hidden border-2 transition-all ${
              selectedImage === idx + 1
                ? "border-gray-800"
                : "border-gray-200 hover:border-gray-400"
            }`}
          >
            <img
              src={img}
              alt={`Thumb ${idx + 1}`}
              className="w-full h-24 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
