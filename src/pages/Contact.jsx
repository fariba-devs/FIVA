import HeroContent from "../features/hero/HeroContent.jsx";
import NewsletterSection from "../ui/NewsletterSection.jsx";
import ContactSection from "../features/contact/ContactSection.jsx";
import OurStoreSection from "../ui/OurStoreSection.jsx";

const Contact = () => {
  return (
    <>
      <HeroContent name="Contact" />
      <ContactSection />
      <OurStoreSection />
      <NewsletterSection />
    </>
  );
};

export default Contact;
