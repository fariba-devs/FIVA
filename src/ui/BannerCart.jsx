import BaseLink from "./BaseLink.jsx";

const ProductCard = ({ title, imageUrl, className = "" }) => {
  return (
    <div className={`relative overflow-hidden h-full ${className}`}>
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out `}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      {/* Content */}
      <div className="relative flex flex-col justify-end h-full p-6  md:pl-24 pb-16 z-10">
        <h2 className="text-6xl md:text-7xl lg:text-7xl font-family-italiana">
          {title}
        </h2>
        <BaseLink name="Shop it now" />
      </div>
    </div>
  );
};
export default ProductCard;
