// hooks/useSearch.js
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export function useSearch() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      if (location.pathname === "/shop") {
        const params = new URLSearchParams(searchParams);
        params.set("search", searchQuery.trim());
        navigate(`/shop?${params.toString()}`);
      } else {
        navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      }
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      setTimeout(
        () => document.addEventListener("click", handleClickOutside),
        0,
      );
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [searchOpen]);

  return {
    searchOpen,
    setSearchOpen,
    searchQuery,
    setSearchQuery,
    searchRef,
    handleSearch,
    handleKeyPress,
  };
}
