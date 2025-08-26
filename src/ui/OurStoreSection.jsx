import LocationCard from "./LocationCard.jsx";
import { motion } from "framer-motion";

const infoData = [
  {
    title: "Office",
    address: "730 Glenstone Ave 65802, Springfield, US",
    phones: ["+123 987 321", "+123 123 654"],
    email: "vaso@yourinfo.com",
  },
  {
    title: "USA",
    address: "730 Glenstone Ave 65802, Springfield, US",
    phones: ["+123 987 321", "+123 123 654"],
    email: "vaso@yourinfo.com",
  },
];
const OurStoreSection = () => {
  return (
    <motion.section
      className="px-8 pt-16 pb-44"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="mb-5">
            <div>
              <img
                src="/images/post-item3.jpg"
                alt="our-store"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Locations */}
          <div className="pb-6">
            <h3 className="text-5xl mb-2 font-family-italiana capitalize">
              Our stores
            </h3>
            <p className="text-gray-600 mb-6">
              You can also directly buy products from our stores.
            </p>

            <div className="flex flex-wrap">
              {infoData.map((item, index) => (
                <LocationCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurStoreSection;
