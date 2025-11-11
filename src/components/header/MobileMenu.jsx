// components/MobileMenu.jsx
import Logo from "../ui/Logo.jsx";
import NavItemWithSubmenu from "./NavItemWithSubmenu.jsx";
import CartDrawer from "./CartDrawer.jsx";
import NavItem from "./NavItem.jsx";

export function MobileMenu({
  isOpen,
  onClose,
  menuItems,
  getLabel,
  isCartOpen,
  setIsCartOpen,
}) {
  return (
    <>
      <div
        className={`fixed flex flex-col top-0 right-0 h-full w-full bg-white shadow-md lg:hidden transform transition-transform duration-300 ease-in-out z-60 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end text-accent p-4">
          <button
            onClick={onClose}
            className="w-12 h-12 text-2xl font-bold flex items-center justify-center cursor-pointer border-4 border-transparent rounded-lg hover:text-dark active:border-blue-200"
          >
            ✕
          </button>
        </div>
        <div className="px-4 mb-8">
          <Logo />
        </div>
        <ul className="px-4 space-y-6">
          {menuItems.map((item) =>
            item.hasSubmenu ? (
              <NavItemWithSubmenu key={item.to} item={item} mobile={true} onClose={onClose} />
            ) : (
              <NavItem
                key={item.to}
                to={item.to}
                label={getLabel(item)}
                onClick={(e) => {
                  if (item.to === "/cart") {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsCartOpen((prev) => !prev);
                  } else {
                    onClose(); // 👈 بستن منو بعد از کلیک
                  }
                }}
              >
                {item.to === "/cart" && (
                  <CartDrawer
                    isOpen={isCartOpen}
                    onClose={() => setIsCartOpen(false)}
                  />
                )}
              </NavItem>
            ),
          )}
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-50"
          onClick={onClose}
        />
      )}
    </>
  );
}
