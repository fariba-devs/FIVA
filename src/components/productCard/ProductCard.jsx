import ButtonLink from "../ui/ButtonLink.jsx";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="mr-5 w-full select-none">
      <div className="relative overflow-hidden group">
        <img
          src={product.image}
          alt={product.alt}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 flex items-end pb-3 justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity">
          <ButtonLink name="Add to Cart" className="pb-5" product={product} />
        </div>
      </div>
      <div className="text-center pt-3 pb-2">
        <h5 className="text-lg md:text-2xl lg:text-3xlg capitalize">
          <Link
            to={`/singleProduct/${product.id}`}
            className="color-dark hover:text-primary transition-colors text-xl "
          >
            {product.title}
          </Link>
        </h5>
        <span className="text-primary font-light text-lg md:text-xl">
          ${product.price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
