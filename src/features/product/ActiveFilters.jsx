// components/product/ActiveFilters.jsx
import React from "react";
import { X } from "lucide-react";

const ActiveFilters = ({ searchParams, setSearchParams }) => {

    // استخراج فیلترهای فعال
    const getActiveFilters = () => {
        const filters = [];

        if (searchParams.get("search")) {
            filters.push({
                key: "search",
                label: `"${searchParams.get("search")}"`,
            });
        }

        if (searchParams.get("category") && searchParams.get("category") !== "All") {
            filters.push({
                key: "category",
                label: searchParams.get("category"),
            });
        }

        if (searchParams.get("tag")) {
            filters.push({
                key: "tag",
                label: searchParams.get("tag"),
            });
        }

        if (searchParams.get("productList")) {
            filters.push({
                key: "productList",
                label: searchParams.get("productList"),
            });
        }

        if (searchParams.get("price")) {
            const priceLabels = {
                "0-300": "< $300",
                "300-500": "$300-$500",
                "500-700": "$500-$700",
                "700-900": "$700-$900",
                "900-1200": "$900-$1200",
            };
            filters.push({
                key: "price",
                label: priceLabels[searchParams.get("price")],
            });
        }

        return filters;
    };

    const activeFilters = getActiveFilters();

    // 2️⃣ حذف یک فیلتر خاص
    const removeFilter = (key) => {
        const params = new URLSearchParams(searchParams);
        params.delete(key);
        setSearchParams(params);
    };

    // 3️⃣ حذف همه فیلترها
    const clearAllFilters = () => {
        setSearchParams({});
    };

    // اگه فیلتری نیست، چیزی نشون نده
    if (activeFilters.length === 0) return null;

    return (
        <div className="mb-6 p-4 border border-gray-200">
            {/* Header با تعداد و دکمه Clear All */}
            <div className="flex items-center justify-between mb-3">
                {/* 4️⃣ تعداد فیلترهای فعال */}
                <span className="text-sm font-semibold text-gray-700">
          {activeFilters.length} Active {activeFilters.length === 1 ? 'Filter' : 'Filters'}
        </span>

                {/* 3️⃣ دکمه حذف همه */}
                <button
                    onClick={clearAllFilters}
                    className="text-sm text-gray-700 hover:text-red-700 font-medium flex items-center gap-1 transition-colors"
                >
                    <X size={16} />
                    Clear All
                </button>
            </div>

            {/* 1️⃣ Pills/Tags - فیلترهای اعمال‌شده */}
            <div className="flex flex-wrap gap-2">
                {activeFilters.map((filter) => (
                    <div
                        key={filter.key}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:border-gray-400 transition-colors"
                    >
                        <span>{filter.label}</span>
                        {/* 2️⃣ دکمه X برای حذف تک‌تک */}
                        <button
                            onClick={() => removeFilter(filter.key)}
                            className="hover:bg-gray-100 rounded-full p-0.5 transition-colors"
                        >
                            <X size={14} className="text-gray-500 hover:text-gray-700" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActiveFilters;