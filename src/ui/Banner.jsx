import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./BannerCart.jsx";

const MasonryProductLayout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // انیمیشن وقتی 10% از المان نمایان شود شروع می‌شود
        rootMargin: "0px 0px -50px 0px", // انیمیشن کمی دیرتر شروع می‌شود
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <section ref={sectionRef} className="h-[140vh] xl:h-screen">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:grid-rows-2 h-full">
        {products.map((product, idx) => {
          // تعیین ارتفاع‌ها و row-span فقط برای حالت Large
          let className = "";
          if (idx === 0) className += " xl:row-span-2"; // کارت اول ستون سمت چپ
          return (
            <ProductCard
              key={product.id}
              {...product}
              className={className}
              isVisible={isVisible}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MasonryProductLayout;
