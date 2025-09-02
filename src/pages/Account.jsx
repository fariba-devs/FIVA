import HeroContent from "../features/hero/HeroContent.jsx";
import LoginTabs from "../ui/LoginTabs.jsx";
import NewsletterSection from "../ui/NewsletterSection.jsx";

const Account = () => {
  return (
    <>
      <HeroContent name="Account" />
      <LoginTabs />
      <NewsletterSection />
    </>
  );
};

export default Account;
