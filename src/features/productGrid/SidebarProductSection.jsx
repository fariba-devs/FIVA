import React from "react";
import { Link } from "react-router-dom";

const SidebarProductSection = ({ title, items }) => {
  return (
    <div className="mb-10">
      <h5 className="text-xl md:text-2xl font-medium font-italiana text-gray-900 uppercase pb-1 mb-3 whitespace-nowrap">
        {title}
      </h5>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              to="/shop"
              className="text-primary hover:text-gray-900 transition-colors text-lg "
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarProductSection;
