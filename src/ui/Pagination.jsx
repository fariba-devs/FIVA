import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <nav className="flex justify-center items-center lg:space-x-2">
      <button>
        <ChevronLeft size={20} className="text-dark" />
      </button>

      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-3 py-2 transition-colors ${
            currentPage === page
              ? "text-dark"
              : "text-gray-500 hover:text-primary "
          }`}
        >
          {page}
        </button>
      ))}

      <button>
        <ChevronRight size={20} className="text-dark" />
      </button>
    </nav>
  );
};

export default Pagination;
