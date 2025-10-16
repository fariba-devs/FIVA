import HeroContent from "../components/heroContent/HeroContent.jsx";
import NewsletterSection from "../features/newsletter/Newsletter.jsx";
import ProductGrid from "../features/product/ProductGrid.jsx";

const Shop = () => {
  return (
    <>
      <HeroContent name="Shop" />
      <ProductGrid />
      <NewsletterSection />
    </>
  );
};

export default Shop;
