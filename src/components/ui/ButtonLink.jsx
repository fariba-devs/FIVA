import useCartStore from "../../store/usecartStore.js";
import toast from "react-hot-toast";

const ButtonLink = ({ name, className, product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleClick = () => {
    addToCart(product);
    toast.success(`${product.title || "Item"} added to cart!`, {
      duration: 1200,
      position: "bottom-right",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${className} inline-block text-lg hover:text-accent transition cursor-pointer`}
    >
      <span className="relative underline underline-offset-10 decoration-2">
        {name}
      </span>
    </button>
  );
};

export default ButtonLink;
