import HeroSlider from "../ui/HeroSlider.jsx";
import AboutUs from "../ui/AboutUs.jsx";
import Products from "../ui/Products.jsx";
import TestimonialsSection from "../ui/Testimonials.jsx";
import OurVideoSection from "../ui/OurVideoSection.jsx";
import FAQSection from "../ui/FAQSection.jsx";
import Banner from "../ui/Banner.jsx";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <AboutUs />
      <Products />
      <TestimonialsSection />
      <OurVideoSection />
      <FAQSection />
      <Banner />
    </div>
  );
};

export default Home;
