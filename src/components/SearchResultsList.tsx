import { useState } from "react";
import { dbFilteredBy } from "../../helperfuncs";

type SearchResultListProps = {
  searchInput: string;
};

export default function SearchResultsList({
  searchInput,
}: SearchResultListProps) {
  const [filter, setFilter] = useState("");
  const entries = dbFilteredBy(filter, searchInput);

  return (
    <>
      <div className="flex place-content-center">
        <span className="rounded-md shadow-sm">
          <p className="flex justify-center p-3">Search by . . .</p>
          <button
            onClick={() => setFilter("breed")}
            type="button"
            className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            Breed
          </button>
          <button
            onClick={() => setFilter("characteristics")}
            type="button"
            className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            Characteristics
          </button>
          <button
            onClick={() => setFilter("description")}
            type="button"
            className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            Description
          </button>
        </span>
      </div>
      <div>{entries}</div>
    </>
  );
}
