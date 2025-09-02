import HeroContent from "../features/hero/HeroContent.jsx";
import Services from "../ui/Services.jsx";
import VasoInfo from "../ui/VasoInfo.jsx";
import TestimonialsSection from "../features/testimonials/Testimonials.jsx";
import NewsletterSection from "../ui/NewsletterSection.jsx";

const About = () => {
  return (
    <>
      <HeroContent name="About" />
      <Services />
      <VasoInfo />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
};

export default About;
