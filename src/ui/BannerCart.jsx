import BaseLink from "./BaseLink.jsx";
import { motion } from "framer-motion";

const ProductCard = ({ title, imageUrl, className = "" }) => {
  return (
    <div className={`relative overflow-hidden h-full ${className}`}>
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out `}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <motion.div
        initial={{ x: 0 }}
        whileInView={{ x: "100%" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="absolute top-0 left-0 w-full h-full bg-gray-300"
      />
      {/* Content */}
      <div className="relative flex flex-col justify-end h-full p-6 md:pl-24 z-10">
        <h2 className="text-6xl md:text-7xl lg:text-7xl font-italiana pb-4">
          {title}
        </h2>
        <BaseLink name="Shop collection" className="mb-8" />
      </div>
    </div>
  );
};
export default ProductCard;
