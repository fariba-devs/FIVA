import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <section aria-label="AboutContent" className="py-12">
      <div className="relative flex container mx-auto px-4 flex-col lg:flex-row items-stretch min-h-[500px]">
        {/* Left image - overflow-hidden برگردوندیم */}
        <div className="lg:w-3/5 overflow-hidden relative">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img
              src="images/single-image3.jpg"
              alt="single"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            whileInView={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="absolute top-0 left-0 w-full h-full bg-gray-300"
          />
        </div>

        {/* Right content - وسط‌چین شده نسبت به عکس */}
        <div className="bg-gray-300 w-full min-h-auto p-6 md:w-[650px] md:min-h-[550px] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 lg:mr-20 xl:mr-32 lg:p-12 mt-8 lg:mt-0 z-10">
          <span className="uppercase text-gray-500 mb-6 block">About us</span>
          <h3 className="capitalize mb-8 font-italiana text-4-5xl leading-tight lg:text-5xl">
            Vaso is the only best online store for varieties of collection of
            clean and beautiful vases.
          </h3>
          <p className="text-light-dark leading-relaxed capitalize font-light text-lg">
            Et id sapien id enim, sit tempor cursus elit, fusce. Nunc tristique
            facilisis consectetur at vivamus ut porta porta. Ut nisl, tortor,
            aliquam blandit vitae vehicula vivamus leo nullam urna, scelerisque
            unc lectus phasellus adipiscing arcu. Tristique facilisis nunc
            consectetur at tempor cursus ut porta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
