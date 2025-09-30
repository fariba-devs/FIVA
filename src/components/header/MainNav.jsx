import { useEffect, useRef, useState } from "react";
import Logo from "../ui/Logo.jsx";
import NavItem from "./NavItem.jsx";
import NavItemWithSubmenu from "./NavItemWithSubmenu.jsx";
import { useUser } from "../../features/loginTabs/useUser.jsx";

const menuItems = [
  { to: "/about", label: "About" },
  { to: "/shop", label: "Shop" },
  {
    to: "/pages", // Pages فقط زیرمنو دارد، خودش صفحه ندارد
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
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const { isAuthenticated, isLoading } = useUser();

  const getLabel = (item) => {
    if (item.to === "/account" && !isLoading && isAuthenticated) {
      return "Account ✓";
    }
    return item.label;
  };

  // بستن سرچ وقتی بیرون کلیک میشه
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      setTimeout(() => {
        document.addEventListener("click", handleClickOutside);
      }, 0);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [searchOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // پاک کردن event listener وقتی کامپوننت unmount میشه
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`top-0 z-50 h-20 w-full select-none ${
        isScrolled ? "sticky bg-white" : "fixed bg-transparent"
      }`}
    >
      {/* منوی دسکتاپ */}
      <div className="hidden lg:flex items-center justify-between h-full px-6 max-w-8xl mx-auto">
        {/* منوی سمت چپ (About, Shop, Pages) */}
        <ul className="flex items-center lg:space-x-18 xl:space-x-28 text-dark font-medium text-lg ">
          {menuItems.slice(0, 2).map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              label={item.label}
              className="flex items-center w-fit justify-center"
            />
          ))}
          {/* آیتم Pages با زیرمنو */}
          <NavItemWithSubmenu item={menuItems[2]} />
        </ul>

        {/* لوگو در وسط */}
        <div className="flex-shrink-0 lg:mx-5 xl:mx-10 ">
          <Logo />
        </div>

        {/* آیتم‌های سمت راست (Search, Account, Cart) */}
        <ul className="flex items-center lg:space-x-18 xl:space-x-28 text-dark font-medium text-lg ">
          <li>
            {/* باکس سرچ داخل li */}
            <div className="relative flex items-center w-fit justify-center transition-all duration-200">
              {searchOpen && (
                <input
                  ref={searchRef}
                  type="text"
                  placeholder="Search Here..."
                  className="absolute right-full text-md px-1 py-0.5 focus:outline-none transition-all duration-500 border-b border-black w-40"
                  autoFocus
                />
              )}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </li>

          {menuItems.slice(3).map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              label={getLabel(item)}
              className="flex items-center w-fit justify-center"
            />
          ))}
        </ul>
      </div>

      {/* دکمه منوی موبایل */}
      <div className="lg:hidden absolute w-full px-10 md:px-20 py-5 text-dark font-semibold flex items-center justify-between">
        <Logo />
        <button
          className="text-xl"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          Menu
        </button>
      </div>

      {/* منوی موبایل */}
      <div
        className={`fixed flex flex-col top-0 right-0 h-full w-96 bg-white shadow-md lg:hidden transform transition-transform duration-300 ease-in-out z-60 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* دکمه بستن */}
        <div className="flex justify-end text-accent p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
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
              <NavItemWithSubmenu key={item.to} item={item} mobile={true} />
            ) : (
              <NavItem key={item.to} to={item.to} label={getLabel(item)} />
            ),
          )}
        </ul>
      </div>

      {/* Overlay برای بستن منوی موبایل */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50  lg:hidden z-50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default MainNav;
