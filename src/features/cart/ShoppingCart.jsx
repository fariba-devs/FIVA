import { useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import useCartStore from "../../store/usecartStore.js";

const CartPage = () => {
  const navigate = useNavigate();

  //***************************************************************** دریافت داده‌ها و توابع از Zustand store
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const getTotalItems = useCartStore((state) => state.getTotalItems);

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  // *****************************************************************افزایش تعداد محصول
  const handleIncrease = (productId, currentQuantity) => {
    updateQuantity(productId, currentQuantity + 1);
  };

  //***************************************************************** کاهش تعداد محصول
  const handleDecrease = (productId, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    }
  };

  //***************************************************************** حذف محصول
  const handleRemove = (productId) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      removeFromCart(productId);
    }
  };

  //***************************************************************** پاک کردن کل سبد
  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear your entire cart?")) {
      clearCart();
    }
  };

  // رفتن به صفحه پرداخت
  const handleCheckout = () => {
    navigate("/checkout");
  };

  // رفتن به صفحه فروشگاه
  const handleContinueShopping = () => {
    navigate("/shop");
  };
  //**************************************************************************************************
  return (
    <section aria-label="CartPage" className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-italiana text-primary">
            Shopping Cart
          </h1>
          {cartItems.length > 0 && (
            <button
              onClick={handleClearCart}
              className="text-red-500 hover:text-red-700 text-sm font-medium flex items-center gap-2"
            >
              <Trash2 size={18} />
              Clear All
            </button>
          )}
        </div>

        {/* سبد خرید خالی */}
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven't added anything to your cart yet.
            </p>
            <button
              onClick={handleContinueShopping}
              className="bg-primary text-white px-8 py-3 hover:bg-primary/90 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* لیست محصولات */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="shadow-md p-6 flex flex-col md:flex-row gap-6"
                >
                  {/* تصویر محصول */}
                  <div className="w-full md:w-32 h-32 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>

                  {/* اطلاعات محصول */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* کنترل تعداد و حذف */}
                    <div className="flex items-center justify-between mt-4">
                      {/* دکمه‌های تعداد */}
                      <div className="flex items-center gap-3 border border-gray-300 rounded">
                        <button
                          onClick={() => handleDecrease(item.id, item.quantity)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="text-lg font-medium w-12 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleIncrease(item.id, item.quantity)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={18} />
                        </button>
                      </div>

                      {/* قیمت کل و دکمه حذف */}
                      <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-red-500 hover:text-red-700 p-2"
                          aria-label="Remove item"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* خلاصه سبد خرید */}
            <div className="lg:col-span-1">
              <div className="shadow-md p-6 sticky top-8">
                <h2 className="text-2xl font-italiana text-primary mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Items ({totalItems})</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-gray-300 pt-3 mt-3">
                    <div className="flex justify-between text-xl font-bold text-gray-900">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-gray-900 text-white py-4 text-lg font-medium hover:bg-gray-800 transition-colors mb-3"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={handleContinueShopping}
                  className="w-full bg-white text-gray-900 py-4 text-lg font-medium border-2 border-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
