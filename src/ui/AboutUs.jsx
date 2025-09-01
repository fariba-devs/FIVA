import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.section
      aria-label="AboutUs"
      className="py-45"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 4 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 text-left max-w-full space-y-8 sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl">
        <p className="text-gray-600 font-medium ">ABOUT US</p>
        <h2 className="leading-tight text-3xl md:text-5xl font-italiana text-[2.625rem]">
          Vaso Is The Only Best Online Store For Varieties Of Collection Of
          Clean And Beautiful Vases.
        </h2>
        <p className="tracking-normal text-lg font-light text-light-dark">
          Et id sapien id enim, sit tempor cursus elit, fusce. Nunc tristique
          facilisis consectetur at vivamus ut porta porta. Ut nisl, tortor,
          aliquam blandit vitae vehicula vivamus leo nullam urna, scelerisque
          unc lectus phasellus adipiscing arcu. Tristique facilisis nunc
          consectetur at tempor cursusut porta.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutUs;
