import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/usecartStore.js";

const CartDrawer = ({ isOpen, onCloseCart, onClose }) => {
  // *****************************************************************دریافت داده‌ها و توابع از Zustand store
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const clearCart = useCartStore((state) => state.clearCart);

  const itemCount = getTotalItems();
  const totalPrice = getTotalPrice();
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  //********************************************************************************************
  // رفتن به صفحه سبد خرید
  const onViewCart = () => {
    navigate("/cart");
    onCloseCart();
    onClose();

  };

  // رفتن به صفحه پرداخت
  const onCheckout = () => {
    navigate("/checkout");
    onCloseCart();
    onClose();
  };
  // رفتن به صفحه جزئیات محصول
  const handleProductClick = (productId) => {
    navigate(`/singleProduct/${productId}`);
    onCloseCart();
    onClose();
  };

  // ******************************************************************بستن drawer با کلیک خارج از آن
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onCloseCart();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onCloseCart]);

  if (!isOpen) return null;

  //********************************************************************************************
  return (
    <section
      aria-label="CartDrawer"
      ref={dropdownRef}
      className="absolute top-full mt-2 right-0 w-85 bg-white shadow-2xl z-50"
    >
      {/* Header **********************************************************************************/}
      <div className="flex items-center justify-between p-3 bg-white border-b border-gray-200">
        <h3 className="text-2xl font-italiana text-primary">Your Cart</h3>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gray-500 text-white flex items-center justify-center text-base font-medium">
            {itemCount}
          </div>
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="text-light-dark hover:text-red-700 text-sm font-medium"
              aria-label="Clear cart"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Cart Items **********************************************************************************/}
      <div className="max-h-[40vh] overflow-y-auto">
        {cartItems.length === 0 ? (
          <div className="p-8 text-center text-primary ">
            Your cart is empty
          </div>
        ) : (

          <div>
            {cartItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleProductClick(item.id)}
                className="p-4 ml-3 mr-3 border border-gray-800  flex justify-between items-start mb-0"
              >
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-base text-gray-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-light-dark hover:text-red-700 text-sm font-bold"
                    aria-label="Remove item"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}

            <div className="p-4 ml-3 mr-3 border border-gray-800 flex justify-between items-center bg-white">
              <span className="text-base font-bold text-gray-900">
                TOTAL (USD)
              </span>
              <span className="text-base font-bold text-gray-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

        )}
      </div>

      {/* Buttons **********************************************************************************/}
      {cartItems.length > 0 && (
        <div className="p-2 mr-2 bg-white space-y-3">
          <button
            onClick={onViewCart}
            className="w-full bg-gray-900 text-white m-1 py-3.5 text-base font-normal hover:bg-gray-800 transition-colors"
          >
            View Cart
          </button>
          <button
            onClick={onCheckout}
            className="w-full bg-stone-500 text-white m-1 py-3.5 text-base font-normal hover:bg-stone-600 transition-colors"
          >
            Go To Checkout
          </button>
        </div>
      )}
    </section>
  );
};

export default CartDrawer;
