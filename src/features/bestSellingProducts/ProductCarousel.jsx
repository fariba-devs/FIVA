import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard.jsx";
import { useProducts } from "../../hooks/useProducts.jsx";
import Loading from "../../components/ui/Loading.jsx";

const ProductCarousel = ({ swiperRef }) => {
  const { products, isLoading } = useProducts();
  console.log("🔍 products :", products);

  if (isLoading) return <Loading />;

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
