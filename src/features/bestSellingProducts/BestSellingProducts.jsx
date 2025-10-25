import ArrowButton from "../../components/ui/ArrowButton.jsx";
import ProductCarousel from "./ProductCarousel.jsx";
import { useRef } from "react";
import LinkToShop from "../../components/ui/LinkToShop.jsx";

const BestSellingProducts = () => {
  const swiperRef = useRef(null);

  return (
    <section aria-label="BestSellingProducts" className="select-none">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between max-w-9xl mx-auto px-4 md:px-20 py-5 gap-2">
        <h2 className="font-italiana font-medium text-4xl md:text-5xl">
          Best selling Items
        </h2>
        <div className="flex flex-row items-center font-medium space-x-10">
          <div>
            <LinkToShop name="View All Items" />
          </div>
          <div className="flex flex-row space-x-2">
            <ArrowButton
              direction="left"
              iconType="chevron"
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <ArrowButton
              direction="right"
              iconType="chevron"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </div>
      <ProductCarousel swiperRef={swiperRef} />
    </section>
  );
};

export default BestSellingProducts;
