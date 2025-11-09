// components/SearchBox.jsx
import { useSearch } from "../../hooks/useSearch.js";

export function SearchBox() {
  const {
    searchOpen,
    setSearchOpen,
    searchQuery,
    setSearchQuery,
    searchRef,
    handleSearch,
    handleKeyPress,
  } = useSearch();

  return (
    <div className="relative flex items-center w-fit justify-center transition-all duration-200">
      {searchOpen && (
        <input
          ref={searchRef}
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="absolute right-full text-md px-1 py-0.5 focus:outline-none transition-all duration-500 border-b border-black w-40"
          autoFocus
        />
      )}
      <button
        type="button"
        onClick={() => {
          if (searchOpen && searchQuery.trim()) {
            handleSearch();
          } else {
            setSearchOpen(true);
          }
        }}
        className="whitespace-nowrap hover:text-accent transition-colors"
      >
        Search
      </button>
    </div>
  );
}
