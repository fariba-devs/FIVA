import React, { useState, useRef, useEffect } from "react";
import {
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  X,
  Star,
} from "lucide-react";
import { useProduct } from "../../hooks/useProduct.jsx";
import useCartStore from "../../store/usecartStore.js";
import Loading from "../../components/ui/Loading.jsx";
import PageNotFound from "../../pages/PageNotFound.jsx";
import ErrorMessage from "../../components/ui/ErrorMessage.jsx";

const ProductDetail = ({ productId }) => {
  const { product, loading, error } = useProduct(productId, true);
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  // States
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const imageRef = useRef(null);

  // رنگ‌ها و سایزها
  const colors = ["Black", "White", "Blue", "Red"];
  const sizes = ["XS", "S", "M", "L", "XL"];

  //(Quantity)**********************************************************************************************
  // بررسی اینکه آیا محصول در سبد خرید هست
  const cartItem = cartItems.find((item) => item.id === product?.id);

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    } else {
      setQuantity(1);
    }
  }, [cartItem]);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;

    if (newQuantity >= 1 && newQuantity <= product?.maxQuantity) {
      setQuantity(newQuantity);
    }
  };
  //**********************************************************************************************

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
  //**********************************************************************************************
  const handleAddOrUpdateCart = () => {
    if (!product) return;

    if (cartItem) {
      // اگر محصول در سبد است، تعداد را آپدیت کن
      updateQuantity(product.id, quantity);
    } else {
      // اگر محصول در سبد نیست، اضافه کن
      addToCart({ ...product, quantity, selectedColor, selectedSize });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product?.title,
        text: product?.description,
        url: window.location.href,
      });
    } else {
      // Fallback: کپی لینک
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  //**************************************************************************************************
  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!product) return <PageNotFound />;
  //**************************************************************************************************

  return (
    <section aria-label="ProductDetail" className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          SingleProduct / {product?.category} / {product?.title}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 shadow-sm bg-white">
          {/* Left Side - Images *****************************************************************************/}
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
                src={
                  selectedImage === 0
                    ? product.image
                    : product.images?.[selectedImage - 1]
                }
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

          {/* Right Side - Product Info ******************************************************************/}
          <div className="space-y-6">
            {/* Header with Title and Actions */}
            <div className="flex justify-between items-start">
              <h1 className="text-4xl font-bold text-gray-900">
                {product?.title}
              </h1>
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
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= (product?.rating?.rate || 0)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                ({product?.rating?.count || 0} reviews)
              </span>
            </div>

            {/* Price & Description */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-gray-900">
                ${product?.price}
              </span>
              <span className="text-2xl text-gray-500 line-through">
                ${(product?.price * 1.5).toFixed(2)}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Save 33%
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {product?.description}
            </p>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Color: {selectedColor}
              </h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 border-2 rounded-lg transition-all font-medium ${
                      selectedColor === color
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Size: {selectedSize}
              </h3>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-3 border-2 rounded-lg transition-all font-medium min-w-[60px] ${
                      selectedSize === size
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quantity
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-6 py-3 hover:bg-gray-100 transition-colors font-semibold text-lg"
                    disabled={quantity <= 1}
                  >
                    −
                  </button>
                  <span className="px-8 py-3 border-x-2 border-gray-300 font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-6 py-3 hover:bg-gray-100 transition-colors font-semibold text-lg"
                    disabled={quantity >= product?.maxQuantity}
                  >
                    +
                  </button>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Max: {product?.maxQuantity || 10}
                </span>
              </div>
            </div>

            {/* Stock Status */}
            {product?.stock && (
              <div className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    product.stock > 10 ? "bg-green-500" : "bg-orange-500"
                  }`}
                ></div>
                <span className="text-sm text-gray-600">
                  {product.stock > 10
                    ? "In Stock"
                    : `Only ${product.stock} left in stock`}
                </span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleAddOrUpdateCart}
                className="flex-1 px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                {cartItem ? "Update Cart" : "Add to Cart"}
              </button>
              <button className="flex-1 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Buy Now
              </button>
            </div>

            {/* Additional Info */}
            <div className="border-t pt-6 space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="font-semibold">SKU:</span>
                <span>{product?.id}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Category:</span>
                <span>{product?.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Free shipping:</span>
                <span>On orders over $50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
