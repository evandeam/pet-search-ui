// The stateful component (user selections of what they want the search to result in)
// Pass to SearchBar setSearchInput (to be able to modify the stateful searchInput), and a function that causes the SearchResultList to execute the "search" and render the list

import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";
import { useState } from "react";

export default function SearchContainer() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <div className="relative inset-y-5 px-10 md:px-40 lg:px-50 xl:px-60">
        <SearchBar setSearchInput={setSearchInput} />
      </div>
      <div className="relative inset-y-10">
        <SearchResultsList searchInput={searchInput} />
      </div>
    </div>
  );
}
