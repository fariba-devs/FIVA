import React, { useState, useEffect } from "react";
import { MoveRight, ArrowLeft, ArrowRight } from "lucide-react";
import ArrowButton from "./ArrowButton.jsx";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      id: 1,
      quote:
        "A pellen tesque pretium feugiat vel morbi sagittis lorem habi tasse cursus. Suspen dise tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis.",
      author: "Anna Garcia",
    },
    {
      id: 2,
      quote:
        "Exceptional service and outstanding results! The team went above and beyond to deliver exactly what we needed. Highly recommend to anyone looking for quality work.",
      author: "John Smith",
    },
    {
      id: 3,
      quote:
        "Professional, reliable, and innovative. Working with this team has been a game-changer for our business. The attention to detail is remarkable.",
      author: "Sarah Johnson",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative py-45">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {/* Title */}
            <div
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-family-italiana text-[2.625rem]">
                What Our Customers Says
              </h2>
            </div>

            {/* Testimonials Slider */}
            <div
              className={`relative mb-12 transition-all duration-1500 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="text-center max-w-3xl mx-auto">
                        <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 leading-relaxed mb-8 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-px bg-gray-300 mb-4"></div>
                          <div className="font-bold text-gray-800 uppercase tracking-wide">
                            {testimonial.author}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-1">
              <ArrowButton
                direction="left"
                variant="minimal"
                iconType="arrow"
                // onClick={handlePrev}
              />
              <div className="w-0.5 h-4 bg-gray-600"></div>
              <ArrowButton
                direction="right"
                variant="minimal"
                iconType="arrow"
                // onClick={handleNext}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
