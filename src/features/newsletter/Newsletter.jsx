import BackgroundSection from "../../components/ui/BackgroundSection.jsx";
import NewsletterForm from "./NewsletterForm.jsx";

const Newsletter = () => {
  return (
    <BackgroundSection ariaLabel={Newsletter} className="h-112 lg:h-96">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center md:p-10">
        <div className="mb-6 mt-10 text-left leading-loose">
          <h2 className="text-6-7xl leading-tight lg:text-7xl font-italiana font-heading capitalize mb-0 sm:mb-3">
            Subscribe to Our Newsletter
          </h2>
          <p className="normal-case text-lg font-light text-light-dark">
            Get latest news, updates and deals directly mailed to your inbox
          </p>
        </div>
        {/* فرم */}
        <NewsletterForm />
      </div>
    </BackgroundSection>
  );
};

export default Newsletter;
