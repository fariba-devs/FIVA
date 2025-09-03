const BackgroundSection = ({ children, className, ariaLabel }) => {
  return (
    <section
      aria-label={ariaLabel}
      className={`${className} relative flex md:items-center justify-center md:p-10 bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: "url('/images/hero-img.jpg')" }}
    >
      <div className="container mx-auto text-center px-4 ">{children}</div>
    </section>
  );
};

export default BackgroundSection;
