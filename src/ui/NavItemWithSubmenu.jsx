import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const NavItemWithSubmenu = ({ item, className = "", mobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const submenuRef = useRef(null);

  // باز و بسته شدن منو با کلیک روی آیتم اصلی
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // بستن منو وقتی کلیک خارج از آن انجام شود
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <li ref={submenuRef} className={`relative ${className}`}>
      {/* آیتم اصلی */}
      <span
        onClick={handleToggle}
        className="px-4 py-2 cursor-pointer flex items-center justify-between hover:text-accent select-none"
      >
        {item.label}
        <span
          className={`ml-2 text-sm transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </span>

      {/* زیرمنو */}
      {isOpen && (
        <div
          className={`${
            mobile
              ? "pl-4 mt-2 flex flex-col gap-1"
              : "absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-100 py-2"
          } z-50`}
        >
          {item.submenuItems.map((subItem) => (
            <Link
              key={subItem.to}
              to={subItem.to}
              className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 ${
                mobile ? "text-lg" : ""
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default NavItemWithSubmenu;
