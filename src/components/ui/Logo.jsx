import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/home">
      <img src="/images/main-logo.webp" alt="VASO" className="h-14 w-auto" />
    </Link>
  );
};

export default Logo;
