import HeroContent from "../components/heroContent/HeroContent.jsx";
import { useParams } from "react-router-dom";
import BestSellingProducts from "../features/bestSellingProducts/BestSellingProducts.jsx";
import ProductDetail from "../features/cart/productDetail/ProductDetail.jsx";

const SingleProduct = () => {
  const { productId } = useParams(); // دریافت id از URL

  return (
    <>
      <HeroContent name="SingleProduct" />
      <ProductDetail productId={productId} />
      <BestSellingProducts />
    </>
  );
};

export default SingleProduct;
