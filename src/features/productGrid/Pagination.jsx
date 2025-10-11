import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

// تولید آرایه صفحات برای نمایش
// حداکثر 5 صفحه نمایش بده
const generatePageNumbers = (currentPage, totalPages, maxVisiblePages = 5) => {
  const pages = [];

  if (totalPages <= maxVisiblePages) {
    // اگر تعداد صفحات کمتر از 5 باشه، همه رو نشون بده
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    // اگر بیشتر از 5 صفحه باشه، smart pagination
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    // همیشه صفحه اول رو نشون بده
    if (start > 1) {
      pages.push(1);
      if (start > 2) {
        pages.push("...");
      }
    }

    // صفحات میانی
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // همیشه صفحه آخر رو نشون بده
    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }
  }

  return pages;
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // اگر totalPages وجود نداره یا کمتر از 2 باشه، pagination رو نشون نده
  if (!totalPages || totalPages < 2) return null;

  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  return (
    <nav className="flex justify-center items-center lg:space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft
          size={20}
          className={`${currentPage === 1 ? "text-gray-600" : "text-dark"}`}
        />
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 transition-colors cursor-pointer ${
            currentPage === page
              ? "text-dark"
              : "text-gray-500 hover:text-primary "
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight
          size={20}
          className={`${currentPage === totalPages ? "text-gray-600" : "text-dark"}`}
        />
      </button>
    </nav>
  );
};

export default Pagination;
