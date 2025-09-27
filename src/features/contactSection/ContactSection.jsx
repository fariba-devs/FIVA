import LocationCard from "../../components/ui/LocationCard.jsx";
import ContactSectionForm from "./ContactSectionForm.jsx";

const infoData = [
  {
    id: 1,
    title: "Office",
    address: "730 Glenstone Ave 65802, Springfield, US",
    phones: ["+123 987 321", "+123 123 654"],
    email: "vaso@yourinfo.com",
  },
  {
    id: 2,
    title: "Management",
    address: "730 Glenstone Ave 65802, Springfield, US",
    phones: ["+123 987 321", "+123 123 654"],
    email: "vaso@yourinfo.com",
  },
];

const ContactSection = () => {
  return (
    <section
      aria-label="ContactSection"
      className="container px-8 py-36 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      {/* Contact Info */}
      <div className="pb-6">
        <h3 className="text-5xl mb-2 font-italiana capitalize">Contact info</h3>
        <p className="text-gray-600 mb-6">
          Tortor dignissim convallis aenean et tortor at risus viverra
          adipiscing.
        </p>

        <div className="flex flex-wrap">
          {infoData.map((item) => (
            <LocationCard key={item.id} {...item} />
          ))}
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="inquiry-item">
        <h3 className="text-5xl mb-2 font-italiana capitalize">
          Any questions?
        </h3>
        <p className="text-gray-600 mb-15">
          Use the form below to get in touch with us.
        </p>
        <ContactSectionForm />
      </div>
    </section>
  );
};

export default ContactSection;
