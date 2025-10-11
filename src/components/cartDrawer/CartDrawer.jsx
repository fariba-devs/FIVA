import { useEffect, useRef } from "react";

// داده‌های تستی برای سبد خرید
const cartItems = [
  { name: "T-shirt", price: 25, description: "Cotton T-shirt" },
  { name: "Shoes", price: 45, description: "Running shoes" },
];

const CartDrawer = ({ isOpen, onClose }) => {
  const itemCount = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const dropdownRef = useRef(null);

  // اکشن‌های دکمه‌ها
  const onViewCart = () => {
    console.log("🛒 View Cart clicked");
  };
  const onCheckout = () => {
    console.log("💳 Checkout clicked");
  };

  // بستن خودکار وقتی بیرون کلیک میشه
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null; // اگر drawer بسته است، رندر نشود

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full mt-2 right-0 w-85 bg-white shadow-2xl z-50"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 bg-white">
        <h3 className="text-2xl font-italiana text-primary">Your Cart</h3>
        <div className="w-10 h-10 rounded-full bg-gray-500 text-white flex items-center justify-center text-base font-medium">
          {itemCount}
        </div>
      </div>

      {/* Cart Items */}
      <div className="bg-white">
        {cartItems.length === 0 ? (
          <div className="p-8 text-center text-gray-400">
            Your cart is empty
          </div>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="p-4 ml-3 mr-3 border border-gray-800">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <span className="text-base text-gray-600 ml-4">
                    ${item.price}
                  </span>
                </div>
                <p className="text-sm text-gray-900">{item.description}</p>
              </div>
            ))}

            <div className="p-4 ml-3 mr-3 border border-gray-800 flex justify-between items-center bg-white">
              <span className="text-base font-bold text-gray-900">
                TOTAL (USD)
              </span>
              <span className="text-base font-bold text-gray-900">
                ${totalPrice}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Buttons */}
      {cartItems.length > 0 && (
        <div className="p-5 bg-white space-y-3">
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
    </div>
  );
};

export default CartDrawer;
