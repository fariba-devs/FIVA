import HeroSlider from "../features/hero/HeroSlider.jsx";
import AboutUs from "../features/about/AboutUs.jsx";
import Products from "../ui/Products.jsx";
import TestimonialsSection from "../features/testimonials/Testimonials.jsx";
import OurVideoSection from "../ui/OurVideoSection.jsx";
import FAQSection from "../ui/FAQSection.jsx";
import Banner from "../ui/Banner.jsx";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <AboutUs />
      <Products />
      <TestimonialsSection />
      <OurVideoSection />
      <FAQSection />
      <Banner />
    </>
  );
};

export default Home;
