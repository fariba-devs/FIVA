import { Link } from "react-router-dom";

const LinkToShop = ({ name, className }) => {
  return (
    <Link
      to="/shop"
      className={`inline-block ${className} text-lg hover:text-accent transition`}
    >
      <span className="relative underline underline-offset-10 decoration-2">
        {name}
      </span>
    </Link>
  );
};

export default LinkToShop;
