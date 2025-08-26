import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./BannerCart.jsx";

const MasonryProductLayout = () => {
  const products = [
    {
      id: 1,
      title: "Old Handmade",
      subtitle: "Shop It Now",
      imageUrl: "images/banner-img1.jpg",
      imageAlt: "Handmade ceramic pottery vases",
      backgroundColor: "bg-stone-200",
      textColor: "text-black",
    },
    {
      id: 2,
      title: "Double Handle",
      subtitle: "Shop Collection",
      imageUrl: "images/banner-img2.jpg",
      imageAlt: "Modern ceramic vase with double handles",
      backgroundColor: "bg-gray-200",
      textColor: "text-black",
    },
    {
      id: 3,
      title: "Pumpers",
      subtitle: "Shop Collection",
      imageUrl: "images/banner-img3.jpg",
      imageAlt: "Dried pampas grass and home decor items",
      backgroundColor: "bg-stone-100",
      textColor: "text-black",
    },
  ];

  return (
    <section className="h-[140vh] xl:h-screen">
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 gap-4 h-full">
        {products.map((product, idx) => {
          // عکس اول (idx === 0) در مدیوم به بالا کل ارتفاع رو می‌گیره
          const extraClass = idx === 0 ? "xl:row-span-2" : "";
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scaleX: 0, originX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1, originX: 0 }}
              transition={{ duration: 1, ease: "linear" }}
              viewport={{ once: true, amount: 0.2 }}
              className={`${extraClass}`}
            >
              <ProductCard {...product} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MasonryProductLayout;
