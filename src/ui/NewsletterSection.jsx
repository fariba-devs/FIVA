import BackgroundSection from "./BackgroundSection.jsx";

const NewsletterSection = () => {
  return (
    <BackgroundSection className="h-112 lg:h-96">
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
        <form className="flex lg:justify-end">
          <div className="flex w-full md:w-3/4 border-b border-black py-2">
            <input
              type="email"
              placeholder="Your email address here"
              className="flex-1 bg-transparent focus:outline-none text-gray-800 placeholder-gray-500"
            />
            <button type="button" className="ml-2 text-accent font-semibold">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </BackgroundSection>
  );
};

export default NewsletterSection;
