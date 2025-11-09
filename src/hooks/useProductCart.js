// features/product/hooks/useProductCart.js
import { useState, useEffect } from "react";
import useCartStore from "../store/usecartStore.js";

export const useProductCart = (product) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const cartItem = cartItems.find((item) => item.id === product?.id);

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    } else {
      setQuantity(1);
    }
  }, [cartItem]);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product?.maxQuantity) {
      setQuantity(newQuantity);
    }
  };

  const handleAddOrUpdateCart = () => {
    if (!product) return;

    if (cartItem) {
      updateQuantity(product.id, quantity);
    } else {
      addToCart({ ...product, quantity, selectedColor, selectedSize });
    }
  };

  return {
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    quantity,
    handleQuantityChange,
    handleAddOrUpdateCart,
    cartItem,
  };
};
