import React from "react";
import { Link } from "react-router-dom";

const SidebarProductSection = ({ title, items, selectedItem, onSelect }) => {
  return (
    <div className="mb-10">
      <h5 className="text-xl md:text-2xl font-medium font-italiana text-gray-900 uppercase pb-1 mb-3 whitespace-nowrap">
        {title}
      </h5>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => onSelect(item.value)}
              className={`text-lg transition-colors ${
                selectedItem === item.value
                  ? "text-gray-900 font-bold"
                  : "text-primary hover:text-gray-900"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarProductSection;
