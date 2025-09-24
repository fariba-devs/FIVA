import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard.jsx";
import { useProducts } from "./useProducts.jsx";
import Loader from "../../components/ui/Loader.jsx";
import { getProducts } from "../../services/products.js";

const ProductCarousel = ({ swiperRef }) => {
  const { products, isLoading } = useProducts();
  if (isLoading) return <Loader />;

  getProducts()
    .then((data) => {
      console.log("Direct call result:", data);
      console.log("Total items:", data?.length);
    })
    .catch((err) => {
      console.error("Direct call error:", err);
    });

  return (
    <div className="w-full overflow-hidden select-none">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // 📌 ذخیره رفرنس برای کنترل
        }}
        spaceBetween={18}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        className="product-swiper select-none"
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            style={{ width: "295px" }}
            role="group"
            aria-label={`${product.id} / ${products.length}`}
          >
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
