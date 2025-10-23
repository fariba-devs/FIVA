import React, { useState } from "react";

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("Green");
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=600&h=700&fit=crop",
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=700&fit=crop",
    "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=600&h=700&fit=crop",
  ];

  const colors = ["Green", "Orange", "Red"];
  const sizes = ["S", "M", "L"];

  const updateQuantity = (change) => {
    const newQty = quantity + change;
    if (newQty >= 1 && newQty <= 2) {
      setQuantity(newQty);
    }
  };

  return (
    <section
      aria-label="ProductDetail"
      className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-16">
        {/* Left Side - Images */}
        <div className="flex gap-4">
          {/* Thumbnail Column */}
          <div className="flex flex-col gap-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-32 h-32 rounded overflow-hidden border-2 transition-all ${
                  selectedImage === idx ? "border-gray-800" : "border-gray-200"
                }`}
              >
                <img
                  src={img}
                  alt={`Product ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 overflow-hidden">
            <img
              src={images[selectedImage]}
              alt="Main product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="flex flex-col mt-6">
          <h1 className="text-4-5xl font-italiana mb-4 ">Shiny Black Pot</h1>

          {/* Rating */}
          <div className="flex items-center text-xl gap-2 mb-4">
            <div className="flex ">
              {[1, 2, 3].map((star) => (
                <span key={star}>★</span>
              ))}
              <span className="">☆</span>
              <span className="text-gray-600">☆</span>
            </div>
            <span className="text-gray-600">(3.5)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl text-accent">$126.00</span>
            <span className="text-xl text-gray-500 line-through">$54.00</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-8 font-light leading-relaxed">
            Tristique ullamcorper nunc egestas non. Justo, cum feugiat imperdiet
            nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing
            platea blandit sit rhoncus.
          </p>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-2xl mb-3 uppercase  underline text-gray-800">
              Color:
            </h3>
            <div className="flex">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-2 py-1 transition-all ${
                    selectedColor === color
                      ? "border-gray-800 bg-gray-400"
                      : "border-gray-300 hover:text-gray-500"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-2xl mb-3 uppercase underline  text-gray-800">
              Size:
            </h3>
            <div className="flex">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-2 py-1 transition-all ${
                    selectedSize === size
                      ? "border-gray-800 bg-gray-400"
                      : "border-gray-300 hover:text-gray-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Stock Info */}
          <p className="text-xl text-gray-700 mb-4">2 in stock</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6  bg-gray-400 max-w-fit">
            <div className="flex items-center px-6 py-2">
              <button
                onClick={() => updateQuantity(-1)}
                className=" hover:bg-gray-100 transition-colors text-lg"
              >
                −
              </button>
              <span className="min-w-[4rem] text-center">{quantity}</span>
              <button
                onClick={() => updateQuantity(1)}
                className=" hover:bg-gray-100 transition-colors text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              Buy Now
            </button>
            <button className="flex-1 px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              Add To Cart
            </button>
          </div>

          {/* Product Meta */}
          <div className="border-t pt-6 space-y-2 text-lg font-medium">
            <p>
              <span className="">SKU:</span>{" "}
              <span className="text-gray-600">1223</span>
            </p>
            <p>
              <span className="">CATEGORY:</span>{" "}
              <span className="text-gray-600">Toy, Robot, Tech</span>
            </p>
            <p>
              <span className="">TAGS:</span>{" "}
              <span className="text-gray-600">Toy, Small, Strong</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDetail;
