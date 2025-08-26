// components/HeroSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BaseLink from "./BaseLink.jsx";

const slides = [
  {
    image: "/images/banner-image.jpg",
    title: "Ceramic soft pot",
    desc: "This ceramic soft pot is specially designed by concept of traditional designs.",
    align: "left",
  },
  {
    image: "/images/banner-image1.jpg",
    title: "Shiny Black Pot",
    desc: "Beautiful shiny black pot is designed for minimalist decors.",
    align: "right",
  },
  {
    image: "/images/banner-image2.jpg",
    title: "Shell Shape Decor",
    desc: "Buy this beautiful unique pieces of shell shape vase decors for your plants of room.",
    align: "left",
  },
];

export default function HeroSlider() {
  return (
    <section aria-label="HeroSlider" className="relative overflow-hidden ">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-screen hero-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="container mx-auto px-4">
                <div
                  className={`flex ${slide.align === "right" ? "justify-end" : "justify-start"}`}
                >
                  <div className="sm:w-3/4 md:w-2/3 lg:w-1/2 px-6 md:px-20 py-12">
                    <h2 className="font-family-italiana text-7xl mb-4">
                      {slide.title}
                    </h2>
                    <p className="font-light text-xl tracking-normal text-light-dark mb-6">
                      {slide.desc}
                    </p>
                    <BaseLink name="Shop Now" className="px-0 py-3" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
