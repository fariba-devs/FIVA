import HeroContent from "../components/heroContent/HeroContent.jsx";
import NewsletterSection from "../features/newsletter/Newsletter.jsx";
import ContactSection from "../features/contactSection/ContactSection.jsx";
import OurStore from "../features/ourStore/OurStore.jsx";
import Newsletter from "../features/newsletter/Newsletter.jsx";

const Contact = () => {
  return (
    <>
      <HeroContent name="Contact" />
      <ContactSection />
      <OurStore />
      <Newsletter />
    </>
  );
};

export default Contact;
