import { useState } from "react";
import { Search } from "lucide-react";
import SidebarProductSection from "./SidebarProductSection.jsx";

const ProductSidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Japanese", "Ceramic", "Ancient", "Soft Pots"];
  const tags = ["Off-White", "Cheap", "Vintage", "Modern"];
  const otherProducts = ["Bowls", "Anchora", "Plates"];
  const priceRanges = [
    "Less than $100",
    "$100 - $200",
    "$200 - $300",
    "$300 - $400",
    "$400 - $500",
  ];

  return (
    <aside className="md:col-span-1 p-6">
      {/* Search Bar */}
      <div className="mb-10 relative">
        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-lg lg:text-xl w-full pl-4 pr-10 py-2 border-b border-gray-900 bg-transparent focus:outline-none "
        />
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <Search size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Categories */}
      <SidebarProductSection title="Categories" items={categories} />

      {/* Tags */}
      <SidebarProductSection title="Tags" items={tags} />

      {/* Other bestSellingProducts */}
      <SidebarProductSection title="other products" items={otherProducts} />

      {/* Price Filter */}
      <SidebarProductSection title="Filter By Price" items={priceRanges} />
    </aside>
  );
};

export default ProductSidebar;
