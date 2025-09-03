import HeroSlider from "../components/heroSlider/HeroSlider.jsx";
import AboutUs from "../components/ui/AboutUs.jsx";
import BestSellingProducts from "../features/bestSellingProducts/BestSellingProducts.jsx";
import VideoHero from "../features/videoHero/VideoHero.jsx";
import Testimonials from "../features/testimonials/Testimonials.jsx";
import FAQ from "../features/faq/FAQ.jsx";
import ProductMasonry from "../components/productMasonry/ProductMasonry.jsx";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <AboutUs />
      <BestSellingProducts />
      <Testimonials />
      <VideoHero />
      <FAQ />
      <ProductMasonry />
    </>
  );
};

export default Home;
