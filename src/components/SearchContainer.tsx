import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";
import { useState } from "react";

export default function SearchContainer() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <SearchBar setSearchInput={setSearchInput} />
      <div className="my-7 overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <SearchResultsList searchInput={searchInput} />
        </div>
      </div>
    </div>
  );
}
