import LocationCard from "../../components/ui/LocationCard.jsx";
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
    <section aria-label="ContactSection" className="px-8 py-36">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="pb-6">
            <h3 className="text-5xl mb-2 font-italiana capitalize">
              Contact info
            </h3>
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
            <form id="form" className="space-y-6">
              <div>
                <label className="block font-medium">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Write your name here"
                  className="w-full border-b p-2 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-medium">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Write your email here"
                  className="w-full border-b p-2 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="number"
                  placeholder="Write your phone number"
                  className="w-full border-b p-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-medium">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Write your subject here"
                  className="w-full border-b p-2  focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-medium">Your Message *</label>
                <textarea
                  placeholder="Write Your Message Here"
                  className="w-full border-b p-2 focus:outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 mt-5 hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
