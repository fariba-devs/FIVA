import React, { useState } from "react";
import ProductCard from "../bestSellingProducts/ProductCard.jsx";
import Pagination from "./Pagination.jsx";
import ProductSidebar from "./ProductSidebar.jsx";
import OurStore from "../ourStore/OurStore.jsx";

const products = [
  {
    id: 1,
    name: "Matt Black",
    price: 750,
    img: "/images/product-item1.jpg",
    alt: "product-item",
    title: "Vintage With Handle",
    link: "single-product.html",
  },
  {
    id: 2,
    name: "Oldie Off-White",
    price: 750,
    img: "images/product-item2.jpg",
    alt: "product-item",
    title: "Vintage With Handle",
    link: "single-product.html",
  },
  {
    id: 3,
    name: "Vintage With Handle",
    price: 750,
    img: "images/product-item3.jpg",
    alt: "product-item",
    title: "Vintage With Handle",
    link: "single-product.html",
  },
  {
    id: 4,
    name: "Opposite Pattern",
    price: 750,
    img: "images/product-item4.jpg",
    alt: "product-item",
    title: "Vintage With Handle",
    link: "single-product.html",
  },
  {
    id: 5,
    name: "Shell Shape",
    price: 750,
    img: "images/product-item5.jpg",
    alt: "product-item",
    title: "Vintage With Handle",
    link: "single-product.html",
  },
  {
    id: 6,
    name: "Matt Black",
    price: 750,
    img: "images/product-item4.jpg",
    alt: "product-item",
    title: "Vintage With Handle",
    link: "single-product.html",
  },
  {
    id: 7,
    name: "Oldie Off-White",
    price: 750,
    img: "images/product-item2.jpg",
    alt: "product-item",
    title: "Vintage With Handle",
    link: "single-product.html",
  },
  {
    id: 8,
    name: "Matt Black",
    price: 750,
    img: "images/product-item3.jpg",
    alt: "product-item",
    title: "Vintage With Handle",
    link: "single-product.html",
  },
  {
    id: 9,
    name: "Opposite Pattern",
    price: 750,
    img: "images/product-item4.jpg",
    alt: "product-item",
    title: "Vintage With Handle",
    link: "single-product.html",
  },
];

const ProductGrid = () => {
  const [sortBy, setSortBy] = useState("");

  return (
    <section
      aria-label="ProductGrid"
      className="min-h-screen py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8"
    >
      {/* Main Content */}
      <main className="md:col-span-3">
        {/* Filter and Sort Header */}
        <div className="flex flex-row justify-between items-center mb-4 gap-4">
          <div className="text-light-dark font-light text-lg">
            <p>Showing 1-9 of 55 results</p>
          </div>
          <div className="w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-auto text-lg px-4 py-2 appearance-none focus:outline-none"
            >
              <option value="">Default sorting</option>
              <option value="name-asc">Name (A - Z)</option>
              <option value="name-desc">Name (Z - A)</option>
              <option value="price-asc">Price (Low-High)</option>
              <option value="price-desc">Price (High-Low)</option>
              <option value="rating-desc">Rating (Highest)</option>
              <option value="rating-asc">Rating (Lowest)</option>
              <option value="model-asc">Model (A - Z)</option>
              <option value="model-desc">Model (Z - A)</option>
            </select>
          </div>
        </div>

        {/* bestSellingProducts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination />
      </main>

      {/* Sidebar */}
      <ProductSidebar />
    </section>
  );
};

export default ProductGrid;
