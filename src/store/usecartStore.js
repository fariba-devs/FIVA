// src/store/useCartStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],

      // اضافه کردن محصول به سبد
      addToCart: (product) => {
        const items = get().cartItems;
        const existingItem = items.find((item) => item.id === product.id);

        if (existingItem) {
          // اگر محصول قبلاً وجود داشت، تعداد رو افزایش بده
          set({
            cartItems: items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          });
        } else {
          // محصول جدید رو اضافه کن
          set({
            cartItems: [...items, { ...product, quantity: 1 }],
          });
        }
      },

      // حذف محصول از سبد
      removeFromCart: (productId) => {
        set({
          cartItems: get().cartItems.filter((item) => item.id !== productId),
        });
      },

      // به‌روزرسانی تعداد محصول
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }

        set({
          cartItems: get().cartItems.map((item) =>
            item.id === productId ? { ...item, quantity } : item,
          ),
        });
      },

      // پاک کردن کل سبد
      clearCart: () => {
        set({ cartItems: [] });
      },

      // محاسبه مجموع قیمت
      getTotalPrice: () => {
        return get().cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        );
      },

      // تعداد کل آیتم‌ها
      getTotalItems: () => {
        return get().cartItems.reduce((sum, item) => sum + item.quantity, 0);
      },

      // افزایش تعداد
      increaseQuantity: (productId) => {
        const items = get().cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        set({ cartItems: items });
      },

      // کاهش تعداد
      decreaseQuantity: (productId) => {
        const currentItem = get().cartItems.find(
          (item) => item.id === productId,
        );
        if (!currentItem) return;

        if (currentItem.quantity > 1) {
          const updated = get().cartItems.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          );
          set({ cartItems: updated });
        } else {
          // اگر صفر شد، حذفش کن
          get().removeFromCart(productId);
        }
      },
    }),
    {
      name: "cart-storage", // نام key در localStorage
    },
  ),
);

export default useCartStore;
