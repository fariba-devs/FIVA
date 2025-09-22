import HeroContent from "../components/heroContent/HeroContent.jsx";
import LoginTabs from "../features/loginTabs/LoginTabs.jsx";
import NewsletterSection from "../features/newsletter/Newsletter.jsx";
import Newsletter from "../features/newsletter/Newsletter.jsx";

const Account = () => {
  return (
    <>
      <HeroContent name="Account" />
      <LoginTabs />
      <Newsletter />
    </>
  );
};

export default Account;
