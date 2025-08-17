const FooterText = ({ title, text }) => {
  return (
    <div className="pb-6">
      {title}
      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
        {text}
      </p>
    </div>
  );
};

export default FooterText;
