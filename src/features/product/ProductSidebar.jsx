import { Search } from "lucide-react";
import SidebarProductSection from "./SidebarProductSection.jsx";
import { useFilterOptions } from "./useFilterOptions.jsx";
import React from "react";
import Loading from "../../components/ui/Loading.jsx";

const ProductSidebar = ({ searchParams, setSearchParams }) => {
  const { categories, tags, productsList, isLoading, error } =
    useFilterOptions();

  //* Reading parameters (search & filter) from the URL ******************************************************************/
  const searchTerm = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category") || "All";
  const selectedTag = searchParams.get("tag") || null;
  const selectedProduct = searchParams.get("productList") || null;
  const selectedPrice = searchParams.get("price") || null;

  const price = [
    { value: "0-300", label: "Less than $300" },
    { value: "300-500", label: "$300 - $500" },
    { value: "500-700", label: "$500 - $700" },
    { value: "700-900", label: "$700 - $900" },
    { value: "900-1200", label: "$900 - $1200" },
  ];

  // Using searchParams (React Router)******************************************************************
  // Storing selected filters in the URL
  // Updating the URL with setSearchParams

  const handleSelect = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (!value || value === "All") params.delete(key);
    else params.set(key, value);
    setSearchParams(params);
  };

  //* isLoading & error ******************************************************************/
  if (isLoading) return <Loading />;
  if (error) return <p className="p-4 text-red-500">Failed to load filters</p>;

  return (
    <aside className="md:col-span-1 p-6">
      {/* Search Bar ******************************************************************/}
      <div className="mb-10 relative">
        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => handleSelect("search", e.target.value)}
          className="text-lg lg:text-xl w-full pl-4 pr-10 py-2 border-b border-gray-900 bg-transparent focus:outline-none "
        />
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <Search size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Categories ******************************************************************/}
      <SidebarProductSection
        title="Categories"
        items={categories.map((c) => ({ value: c.name, label: c.name }))}
        selectedItem={selectedCategory}
        onSelect={(val) => handleSelect("category", val)}
      />

      {/* Tags ******************************************************************/}
      <SidebarProductSection
        title="Tags"
        items={tags.map((t) => ({ value: t.name, label: t.name }))}
        selectedItem={selectedTag}
        onSelect={(val) => handleSelect("tag", val)}
      />

      {/* Other bestSellingProducts ******************************************************************/}
      <SidebarProductSection
        title="ProductsList"
        items={productsList.map((p) => ({ value: p.name, label: p.name }))}
        selectedItem={selectedProduct}
        onSelect={(val) => handleSelect("productList", val)}
      />

      {/* Price Filter ******************************************************************/}
      <SidebarProductSection
        title="Price"
        items={price}
        selectedItem={selectedPrice}
        onSelect={(val) => handleSelect("price", val)}
      />
    </aside>
  );
};

export default ProductSidebar;
