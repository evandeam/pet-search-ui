import type { Dispatch, SetStateAction } from "react";

type SearchBarProps = {
  setSearchInput: Dispatch<SetStateAction<string>>;
};

export default function SearchBar({ setSearchInput }: SearchBarProps) {
  return (
    <div className="mx-10">
      <label>
        Look up info on cat and dog breeds!
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-md pr-10 focus:outline-none sm:text-sm"
          placeholder="Try 'boxer', 'smart', etc."
        />
      </label>
    </div>
  );
}
