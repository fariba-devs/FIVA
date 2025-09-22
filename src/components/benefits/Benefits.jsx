import ArrowButton from "../ui/ArrowButton.jsx";
const benefitsData = [
  {
    id: 1,
    title: "Free delivery",
    description: "Consectetur adipi elit lorem ipsum dolor sit amet.",
    icon: <ArrowButton iconType="shoppingcart" variant="shoppingcart" />,
  },
  {
    id: 2,
    title: "Quality guarantee",
    description: "Dolor sit amet orem ipsu mcons ectetur adipi elit.",
    icon: <ArrowButton iconType="Award" variant="Award" />,
  },
  {
    id: 3,
    title: "Daily offers",
    description: "Amet consectetur adipi elit loreme ipsum dolor sit.",
    icon: <ArrowButton iconType="Tag" variant="Tag" />,
  },
  {
    id: 4,
    title: "100% secure payment",
    description: "Rem Lopsum dolor sit amet, consectetur adipi elit.",
    icon: <ArrowButton iconType="ShieldPlus" variant="ShieldPlus" />,
  },
];

const Benefits = () => {
  return (
    <section
      aria-label="Benefits"
      className="px-8 py-16 md:py-24 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {benefitsData.map((benefit) => (
        <div key={benefit.id} className="text-center">
          <div className="inline-flex p-4 border border-gray-300 rounded-full mb-4 justify-center items-center">
            {benefit.icon}
          </div>
          <h4 className="text-3xl mb-2 font-italiana whitespace-nowrap">
            {benefit.title}
          </h4>
          <p className="text-gray-600">{benefit.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Benefits;
