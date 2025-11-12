import { Link } from "react-router-dom";
import BackgroundSection from "../ui/BackgroundSection.jsx";

const HeroContent = ({ name }) => {
  return (
    <BackgroundSection ariaLabel="HeroContent" className="h-128 pt-55">
      <h1 className={`font-italiana mb-7 
    ${name === "SingleProduct"
          ? "text-6xl sm:text-7xl md:text-8xl"  // 👈 کوچیک‌تر در موبایل فقط برای SingleProduct
          : "text-7xl md:text-8xl"
      }`}
      >{name}</h1>
      <div className="text-lg">
        <span className="mr-2">
          <Link
            to="/shop"
            className="inline-block text-lg hover:text-accent transition"
          >
            <span className="relative decoration-2">Home &gt;</span>
          </Link>
        </span>
        <span>{name}</span>
      </div>
    </BackgroundSection>
  );
};

export default HeroContent;
