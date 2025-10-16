import { NavLink } from "react-router-dom";

const NavItem = ({ to, label, className, onClick, children }) => {
  return (
    <li className="relative">
      <NavLink
        to={to}
        className={({ isActive }) =>
          ` hover:text-accent ${className} ${isActive ? "text-accent" : ""}`
        }
        onClick={onClick}
      >
        <span>{label}</span>
      </NavLink>
      {/* children را زیر لینک رندر می‌کنیم */}
      {children}
    </li>
  );
};
export default NavItem;
