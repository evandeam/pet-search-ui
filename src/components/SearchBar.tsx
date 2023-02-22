import type { Dispatch, SetStateAction } from "react";

type SearchBarProps = {
  setSearchInput: Dispatch<SetStateAction<string>>;
};

export default function SearchBar({ setSearchInput }: SearchBarProps) {
  return (
    <div>
      <div className="mt-1 rounded-md shadow-sm">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-md border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
          placeholder="Type here..."
          aria-invalid="true"
          aria-describedby="search-error"
        />
      </div>
      <p className="mt-2 text-sm text-red-600" id="search-error">
        No matching entries. Try typing something else or searching a different
        category.
      </p>
    </div>
  );
}
