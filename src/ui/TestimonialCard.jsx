import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-full flex-shrink-0 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <blockquote className="text-center mx-auto text-2xl md:text-3xl lg:text-3xl font-light text-gray-700 leading-relaxed mb-10">
          "{testimonial.quote}"
        </blockquote>

        <div className="font-bold text-gray-800 uppercase tracking-wide text-lg ">
          {testimonial.author}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
