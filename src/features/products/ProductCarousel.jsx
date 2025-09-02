import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../ui/ProductCard.jsx";

const products = [
  {
    img: "images/product-item1.jpg",
    alt: "product-item",
    title: "Matt Black",
    price: 870,
    link: "single-product.html",
  },
  {
    img: "images/product-item2.jpg",
    alt: "product-item",
    title: "Oldie Off-White",
    price: 680,
    link: "single-product.html",
  },
  {
    img: "images/product-item3.jpg",
    alt: "product-item",
    title: "Vintage With Handle",
    price: 750,
    link: "single-product.html",
  },
  {
    img: "images/product-item4.jpg",
    alt: "product-item",
    title: "Opposite Pattern",
    price: 650,
    link: "single-product.html",
  },
  {
    img: "images/product-item5.jpg",
    alt: "product-item",
    title: "Shell Shape",
    price: 750,
    link: "single-product.html",
  },
  {
    img: "images/product-item2.jpg",
    alt: "product-item",
    title: "Oldie Off-White",
    price: 750,
    link: "single-product.html",
  },
  {
    img: "images/product-item4.jpg",
    alt: "product-item",
    title: "Opposite Pattern",
    price: 750,
    link: "single-product.html",
  },
  {
    img: "images/product-item3.jpg",
    alt: "product-item",
    title: "Vintage With Handle",
    price: 750,
    link: "single-product.html",
  },
];
const ProductCarousel = ({ swiperRef }) => {
  return (
    <div className="w-full overflow-hidden">
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
        className="product-swiper"
      >
        {products.map((product, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "295px" }}
            role="group"
            aria-label={`${index} / ${products.length}`}
          >
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
