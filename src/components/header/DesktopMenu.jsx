// components/DesktopMenu.jsx
import NavItemWithSubmenu from "./NavItemWithSubmenu.jsx";
import Logo from "../ui/Logo.jsx";
import { SearchBox } from "./SearchBox.jsx";
import CartDrawer from "./CartDrawer.jsx";
import NavItem from "./NavItem.jsx";

export function DesktopMenu({
  menuItems,
  getLabel,
  isCartOpen,
  setIsCartOpen,
}) {
  return (
    <div className="hidden lg:flex items-center justify-between h-full px-6 max-w-8xl mx-auto">
      {/* منوی چپ */}
      <ul className="flex items-center lg:space-x-18 xl:space-x-28 text-dark font-medium text-lg">
        {menuItems.slice(0, 2).map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            label={item.label}
            className="flex items-center w-fit justify-center"
          />
        ))}
        <NavItemWithSubmenu item={menuItems[2]} />
      </ul>

      <div className="flex-shrink-0 lg:mx-5 xl:mx-10">
        <Logo />
      </div>

      {/* منوی راست */}
      <ul className="flex items-center lg:space-x-18 xl:space-x-28 text-dark font-medium text-lg">
        <li>
          <SearchBox />
        </li>
        {menuItems.slice(3).map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            label={getLabel(item)}
            className="flex items-center w-fit justify-center relative"
            onClick={
              item.to === "/cart"
                ? (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsCartOpen((prev) => !prev);
                  }
                : undefined
            }
          >
            {item.to === "/cart" && (
              <CartDrawer
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
              />
            )}
          </NavItem>
        ))}
      </ul>
    </div>
  );
}
