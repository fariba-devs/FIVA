import { NavLink } from "react-router-dom";

const NavItem = ({ to, label, className }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          ` hover:text-accent ${className} ${isActive ? "text-accent" : ""}`
        }
      >
        <span>{label}</span>
      </NavLink>
    </li>
  );
};
export default NavItem;
