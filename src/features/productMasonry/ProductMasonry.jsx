import React from "react";
import ProductCard from "./ProductCard.jsx";
import { useProductMasonry } from "../../hooks/useProductMasonry.js";
import Loading from "../../components/ui/Loading.jsx";

const ProductMasonry = () => {
  const { productMasonry, isLoading } = useProductMasonry();

  if (isLoading) return <Loading />;

  return (
    <section aria-label="ProductMasonry" className="h-[140vh] xl:h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 gap-4 h-full">
        {productMasonry.map((product, idx) => (
          <div key={product.id} className={idx === 0 ? "xl:row-span-2" : ""}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductMasonry;
