import HeroContent from "../components/heroContent/HeroContent.jsx";
import Newsletter from "../features/newsletter/Newsletter.jsx";
import Testimonials from "../features/testimonials/Testimonials.jsx";
import Benefits from "../components/benefits/Benefits.jsx";
import AboutContent from "../components/aboutContent/AboutContent.jsx";

const About = () => {
  return (
    <>
      <HeroContent name="About" />
      <Benefits />
      <AboutContent />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default About;
