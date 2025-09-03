import HeroContent from "../components/heroContent/HeroContent.jsx";
import NewsletterSection from "../features/newsletter/Newsletter.jsx";
import ContactSection from "../features/contactSection/ContactSection.jsx";
import OurStore from "../features/ourStore/OurStore.jsx";

const Contact = () => {
  return (
    <>
      <HeroContent name="Contact" />
      <ContactSection />
      <OurStore />
      <NewsletterSection />
    </>
  );
};

export default Contact;
