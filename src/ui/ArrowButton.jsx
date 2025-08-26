import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Play,
  ShoppingCart,
  Award,
  Tag,
  ShieldPlus,
} from "lucide-react";

// ✅ همه کلیدها lowercase
const ICON_MAP = {
  arrow: { left: ArrowLeft, right: ArrowRight },
  chevron: {
    left: ChevronLeft,
    right: ChevronRight,
    up: ChevronUp,
    down: ChevronDown,
  },
  chevronupdown: { up: ChevronUp, down: ChevronDown },
  play: { left: Play, right: Play },
  shoppingcart: { default: ShoppingCart },
  award: { default: Award },
  tag: { default: Tag },
  shieldplus: { default: ShieldPlus },
};

const ICON_SIZE = {
  default: 60,
  filled: 30,
  chevronupdown: 30,
  minimal: 50,
};

const SPECIAL_ICONS = ["shoppingcart", "award", "tag", "shieldplus"];

const ICON_COLOR = {
  default: "text-black group-hover:text-white group-hover:scale-110",
  filled: "text-black group-hover:text-accent",
  chevronupdown: "text-black group-hover:text-accent",
  minimal: "text-gray-600",
};

const BUTTON_VARIANT = {
  default: "w-20 h-20 bg-white border border-black hover:bg-black",
  minimal: "p-2",
  filled: "relative cursor-pointer w-60 h-60",
  chevronupdown: "relative cursor-pointer",
};

// ✅ ArrowButton کاملاً یکدست
const ArrowButton = ({
  direction = "right",
  variant = "default",
  iconType = "arrow",
  onClick,
  disabled = false,
  backgroundImage,
  className = "",
  ...restProps
}) => {
  const type = iconType.toLowerCase();
  const Icon =
    ICON_MAP[type]?.[direction] || ICON_MAP[type]?.default || ArrowRight;

  const size = ICON_SIZE[variant.toLowerCase()] || 40;
  const isSpecial = SPECIAL_ICONS.includes(type);

  const colorClass = isSpecial
    ? "text-primary"
    : ICON_COLOR[variant.toLowerCase()] || "text-gray-600";
  const variantClass = isSpecial
    ? "w-20 h-20 border border-gray-500"
    : BUTTON_VARIANT[variant.toLowerCase()] || "";

  return (
    <button
      className={`group flex items-center justify-center rounded-full transition-all duration-300 ${variantClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {variant === "filled" && backgroundImage && (
        <div
          className="absolute inset-0 rounded-full animate-spin animate-slow"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      <Icon
        size={size}
        strokeWidth={1}
        className={`transition-all duration-300 ${colorClass}`}
      />
    </button>
  );
};

export default ArrowButton;
