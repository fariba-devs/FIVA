import BaseLink from "./BaseLink.jsx";

const ProductCard = ({ product }) => {
  return (
    <div className="relative mr-5 w-full">
      <div className="relative overflow-hidden cursor-pointer group">
        <img
          src={product.img}
          alt={product.alt}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-end pb-3 justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity">
          <BaseLink name={"Add to Cart"} />
        </div>
      </div>
      <div className="text-center pt-3 pb-2">
        <h5 className="text-lg md:text-2xl lg:text-3xlg capitalize">
          <a href={product.link} className="hover:underline">
            {product.title}
          </a>
        </h5>
        <span className="text-primary font-light text-lg md:text-2xl">
          ${product.price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
