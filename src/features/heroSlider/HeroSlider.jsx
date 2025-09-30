import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BaseLink from "../../components/ui/BaseLink.jsx";
import { useHeroSlider } from "./useHeroSlider.jsx";
import Loading from "../../components/ui/Loading.jsx";

export default function HeroSlider() {
  const { slides, isLoading } = useHeroSlider();

  if (isLoading) return <Loading />;

  return (
    <section aria-label="HeroSlider" className="relative overflow-hidden ">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-screen hero-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-screen bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image_url})` }}
            >
              <div className="container mx-auto px-4">
                <div
                  className={`flex ${slide.content_align === "right" ? "justify-end" : "justify-start"}`}
                >
                  <div className="sm:w-3/4 md:w-2/3 lg:w-1/2 px-6 md:px-20 py-12">
                    <h2 className="font-italiana text-7xl mb-4">
                      {slide.title}
                    </h2>
                    <p className="font-light text-xl tracking-normal text-light-dark mb-6">
                      {slide.description}
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
