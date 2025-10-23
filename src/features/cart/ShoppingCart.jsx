import React, { useState } from "react";
import { X, Minus, Plus } from "lucide-react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Shiny Black",
      price: 750,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Shell Shape",
      price: 750,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=200&h=200&fit=crop",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();

  return (
    <section
      aria-label="ShoppingCart"
      className="min-h-screen p-4 md:p-8 max-w-6xl mx-auto"
    >
      {/* Cart Items Section ****************************************************************************/}
      <div className="mb-6">
        <div className="grid grid-cols-12 gap-4 p-6 border-b font-semibold text-sm md:text-xl">
          <div className="col-span-6">PRODUCT</div>
          <div className="col-span-3 text-center">QUANTITY</div>
          <div className="col-span-2 text-right">SUBTOTAL</div>
        </div>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-12 gap-4 p-6 border-b  items-center"
          >
            <div className="col-span-6 flex items-center gap-6 md:gap-20">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>

            <div className="col-span-3 flex items-center justify-center">
              <div className="flex items-center bg-gray">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 min-w-[3rem] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="col-span-2 text-right">
              <p className="font-medium text-gray-900">
                ${item.price * item.quantity}
              </p>
            </div>

            <div className="col-span-1 text-right">
              <button
                onClick={() => removeItem(item.id)}
                className="p-2 hover:bg-gray-100 rounded transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        ))}

        <div className="p-6 flex items-center gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1 max-w-xs px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button className="px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
            Apply Coupon
          </button>
          <button className="ml-auto px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
            Update Cart
          </button>
        </div>
      </div>

      {/* Cart Total Section ****************************************************************************/}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="font-semibold text-sm md:text-3xl mb-8">Cart Total</h2>

        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <span className="font-medium">SUBTOTAL</span>
            <span className="text-gray-600">${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <span className="font-medium">TOTAL</span>
            <span className="text-gray-900 font-medium">
              ${subtotal.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
            Update Cart
          </button>
          <button className="px-6 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
            Continue Shopping
          </button>
          <button className="px-6 py-3 bg-primary text-white hover:bg-gray-900 transition-colors">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
