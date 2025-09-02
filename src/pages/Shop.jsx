import HeroContent from "../features/hero/HeroContent.jsx";
import NewsletterSection from "../ui/NewsletterSection.jsx";
import ProductGrid from "../features/products/ProductGrid.jsx";

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
