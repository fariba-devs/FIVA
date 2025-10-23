import { Link } from "react-router-dom";

const BaseLink = ({ name, className }) => {
  return (
    <Link
      to="/singleProduct"
      className={`inline-block ${className} text-lg hover:text-accent transition`}
    >
      <span className="relative underline underline-offset-10 decoration-2">
        {name}
      </span>
    </Link>
  );
};

export default BaseLink;
