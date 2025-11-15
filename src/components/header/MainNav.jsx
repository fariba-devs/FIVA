import { useEffect, useState } from "react";
import Logo from "../ui/Logo.jsx";
import { useUser } from "../../hooks/useUser.js";
import { DesktopMenu } from "./DesktopMenu.jsx";
import { MobileMenu } from "./MobileMenu.jsx";
import { User } from "lucide-react";


const menuItems = [
  { to: "/about", label: "About" },
  { to: "/shop", label: "Shop" },
  {
    to: "/pages",
    label: "Pages",
    hasSubmenu: true,
    submenuItems: [
      { to: "/pages/contact", label: "Contact" },
      { to: "/pages/blog", label: "Blog" },
    ],
  },
  { to: "/account", label: "Account" },
  { to: "/cart", label: "Cart" },
];

const MainNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { isAuthenticated, isLoading } = useUser();

  const getLabel = (item) => {
    if (item.to === "/account" && !isLoading && isAuthenticated) {
      return (
          <span className="flex items-center gap-1">
        Account
        <User className="w-4 h-4 text-gray-600" />
      </span>
      );    }
    return item.label;
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`top-0 z-50 h-20 w-full select-none ${
        isScrolled ? "sticky bg-white" : "fixed bg-transparent"
      }`}
    >
      {/* **************************************************************************منوی دسکتاپ */}
      <DesktopMenu
        menuItems={menuItems}
        getLabel={getLabel}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />

      {/* *****************************************************************************دکمه منوی موبایل */}
      <div className="lg:hidden absolute w-full px-10 md:px-20 py-5 text-dark font-semibold flex items-center justify-between">
        <Logo />
        <button
          className="text-xl"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          Menu
        </button>
      </div>

      {/* *****************************************************************************منوی موبایل */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={menuItems}
        getLabel={getLabel}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
    </nav>
  );
};

export default MainNav;
