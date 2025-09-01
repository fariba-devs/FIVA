import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowButton from "./ArrowButton.jsx";
import TestimonialCard from "./TestimonialCard.jsx";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "A pellen tesque pretium feugiat vel morbi sagittis lorem habi tasse cursus. Suspen dise tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis.",
      author: "Anna Garcia",
    },
    {
      quote:
        "Exceptional service and outstanding results! The team went above and beyond to deliver exactly what we needed. Highly recommend to anyone looking for quality work.",
      author: "John Smith",
    },
    {
      quote:
        "Professional, reliable, and innovative. Working with this team has been a game-changer for our business. The attention to detail is remarkable.",
      author: "Sarah Johnson",
    },
  ];

  const handleNext = () => {
    if (currentSlide < testimonials.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <section aria-label="TestimonialsSection" className="relative py-45">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-italiana text-[2.625rem]">
            What Our Customers Says
          </h2>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mb-12"
        >
          <div className="overflow-hidden">
            {/* motion : move with button */}
            <motion.div
              className="flex"
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center space-x-1">
          <ArrowButton
            direction="left"
            variant="minimal"
            iconType="arrow"
            onClick={handlePrev}
            disabled={currentSlide === 0} // غیرفعال وقتی اسلاید اولی
          />
          <div className="w-0.5 h-4 bg-gray-600"></div>
          <ArrowButton
            direction="right"
            variant="minimal"
            iconType="arrow"
            onClick={handleNext}
            disabled={currentSlide === testimonials.length - 1} // غیرفعال وقتی آخرین اسلاید
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
