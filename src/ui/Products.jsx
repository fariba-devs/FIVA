import BaseLink from "./BaseLink.jsx";
import ArrowButton from "./ArrowButton.jsx";
import ProductCarousel from "./ProductCarousel.jsx";

const Products = () => {
  return (
    <section className=" ">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between max-w-9xl mx-auto px-4 md:px-20 py-5 gap-2">
        <div>
          <h2 className="font-family-italiana font-medium text-4xl md:text-5xl">
            Best selling Items
          </h2>
        </div>
        <div className="flex flex-row items-center font-medium space-x-10">
          <div>
            <BaseLink name="View All Items" />
          </div>
          <div className="flex flex-row space-x-2">
            <ArrowButton direction="left" iconType="chevron" />
            <ArrowButton direction="right" iconType="chevron" />
          </div>
        </div>
      </div>
      <ProductCarousel />
    </section>
  );
};

export default Products;
