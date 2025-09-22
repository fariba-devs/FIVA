import React from "react";
import ProductCard from "./ProductCard.jsx";

const products = [
  {
    id: 1,
    title: "Old Handmade",
    subtitle: "Shop It Now",
    imageUrl: "images/productMasonry-img1.jpg",
    imageAlt: "Handmade ceramic pottery vases",
    backgroundColor: "bg-stone-200",
    textColor: "text-black",
  },
  {
    id: 2,
    title: "Double Handle",
    subtitle: "Shop Collection",
    imageUrl: "images/productMasonry-img2.jpg",
    imageAlt: "Modern ceramic vase with double handles",
    backgroundColor: "bg-gray-200",
    textColor: "text-black",
  },
  {
    id: 3,
    title: "Pumpers",
    subtitle: "Shop Collection",
    imageUrl: "images/productMasonry-img3.jpg",
    imageAlt: "Dried pampas grass and home decor items",
    backgroundColor: "bg-stone-100",
    textColor: "text-black",
  },
];

const ProductMasonry = () => {
  return (
    <section aria-label="ProductMasonry" className="h-[140vh] xl:h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 gap-4 h-full">
        {products.map((product, idx) => (
          <div key={product.id} className={idx === 0 ? "xl:row-span-2" : ""}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductMasonry;
