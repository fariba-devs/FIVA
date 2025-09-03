const FooterText = ({ title, text }) => {
  return (
    <div className="pb-6">
      <h4 className="text-2xl font-italiana font-medium text-light-dark pb-4">
        {title}
      </h4>
      <p className="text-light-dark w-fit leading-relaxed tracking-normal text-lg font-light">
        {text}
      </p>
    </div>
  );
};

export default FooterText;
