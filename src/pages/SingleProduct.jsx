import HeroContent from "../components/heroContent/HeroContent.jsx";
import ProductDetail from "../features/cart/ProductDetail.jsx";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams(); // دریافت id از URL

  return (
    <>
      <HeroContent name="SingleProduct" />
      <ProductDetail productId={productId} />
    </>
  );
};

export default SingleProduct;
