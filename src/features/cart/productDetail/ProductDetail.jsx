// features/product/ProductDetail.jsx
import React from "react";
import Loading from "../../../components/ui/Loading.jsx";
import { useProductCart } from "../../../hooks/useProductCart.js";
import PageNotFound from "../../../pages/PageNotFound.jsx";
import ErrorMessage from "../../../components/ui/ErrorMessage.jsx";
import ImageGallery from "./ImageGallery.jsx";
import ProductHeader from "./ProductHeader.jsx";
import ProductPrice from "./ProductPrice.jsx";
import ColorSelector from "./ColorSelector.jsx";
import SizeSelector from "./SizeSelector.jsx";
import QuantitySelector from "./QuantitySelector.jsx";
import StockStatus from "./StockStatus.jsx";
import ProductActions from "./ProductActions.jsx";
import ProductInfo from "./ProductInfo.jsx";
import { useProduct } from "../../../hooks/useProduct.js";

const colors = ["Black", "White", "Blue", "Red"];
const sizes = ["XS", "S", "M", "L", "XL"];

const ProductDetail = ({ productId }) => {
  const { product, loading, error } = useProduct(productId, true);
  const {
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    quantity,
    handleQuantityChange,
    handleAddOrUpdateCart,
    cartItem,
  } = useProductCart(product);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage error={error} />;
  if (!product) return <PageNotFound />;

  return (
    <section aria-label="ProductDetail" className="min-h-screen pb-14">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6">
          SingleProduct / {product?.category} / {product?.title}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 shadow-sm bg-white">
          <ImageGallery product={product} />

          <div className="space-y-6">
            <ProductHeader product={product} />
            <ProductPrice product={product} />

            <p className="text-gray-600 leading-relaxed">
              {product?.description}
            </p>

            <ColorSelector
              colors={colors}
              selectedColor={selectedColor}
              onSelect={setSelectedColor}
            />

            <SizeSelector
              sizes={sizes}
              selectedSize={selectedSize}
              onSelect={setSelectedSize}
            />

            <QuantitySelector
              quantity={quantity}
              maxQuantity={product?.maxQuantity}
              onChange={handleQuantityChange}
            />

            <StockStatus stock={product?.stock} />

            <ProductActions
              cartItem={cartItem}
              onAddOrUpdate={handleAddOrUpdateCart}
            />

            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
