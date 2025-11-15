import React from "react";
const sortOptions = [
  { value: "", label: "Default sorting" },
  { value: "name-asc", label: "Name (A - Z)" },
  { value: "name-desc", label: "Name (Z - A)" },
  { value: "price-asc", label: "Price (Low-High)" },
  { value: "price-desc", label: "Price (High-Low)" },
];

const Sort = ({onChange,value}) => {
  return (
      <div className="w-auto">
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-auto text-lg px-4 py-2 appearance-none focus:outline-none"
        >
          {sortOptions.map((item)=>
              (<option key={item.value} value={item.value}>{item.label}</option>))}

        </select>
      </div>
  );
};

export default Sort;
