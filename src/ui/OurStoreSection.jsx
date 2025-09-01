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
    <section className="px-8 pt-16 pb-44">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }} // once=true یعنی فقط یکبار، amount=0.2 یعنی وقتی ۲۰٪ سکشن اومد تو ویو
            className="mb-5"
          >
            <img
              src="/images/post-item3.jpg"
              alt="our-store"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="pb-6"
          >
            <h3 className="text-5xl mb-2 font-italiana capitalize">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStoreSection;
