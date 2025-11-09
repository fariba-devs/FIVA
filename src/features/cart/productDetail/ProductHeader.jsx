import React, { useState } from "react";
import { Heart, Share2, Star } from "lucide-react";
import Rating from "./Rating.jsx";

const ProductHeader = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  //share ************************************************************************************************
  const handleShare = async () => {
    try {
      if (navigator.share) {
        // اگر مرورگر از Web Share API پشتیبانی کنه
        await navigator.share({
          title: product?.title || "Product",
          text: product?.description || "",
          url: window.location.href,
        });
        console.log("Product shared successfully");
      } else if (navigator.clipboard) {
        // Fallback: کپی لینک به کلیپ‌بورد
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      } else {
        // Fallback دیگر: فقط alert با لینک
        alert(`Share this link: ${window.location.href}`);
      }
    } catch (error) {
      console.error("Share failed:", error);
      alert("Sharing failed. Please try manually.");
    }
  };

  return (
    <>
      <div className="flex justify-between items-start">
        <h1 className="text-4xl font-bold text-gray-900">{product?.title}</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-2 rounded-full border transition-all ${
              isWishlisted
                ? "bg-red-50 border-red-500 text-red-500"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <Heart
              className={`w-5 h-5 ${isWishlisted ? "fill-red-500" : ""}`}
            />
          </button>
          <button
            onClick={handleShare}
            className="p-2 rounded-full border border-gray-300 hover:border-gray-400 transition-all"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Rating */}
      <Rating rate={product?.rating?.count} />
    </>
  );
};

export default ProductHeader;
