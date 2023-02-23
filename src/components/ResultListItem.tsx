import ItemDetails from "./ItemDetails";
import type { PetInfo } from "../types";
import { useState } from "react";

export default function ResultListItem({
  breed,
  species,
  averageLifespan,
  averageWeight,
  coatLength,
  colors,
  tailLength,
  characteristics,
  picture,
  description,
}: PetInfo) {
  const [open, setOpen] = useState(false);

  function truncateDescription(string: string) {
    return `${string.substring(0, 100)}...`;
  }

  return (
    <div className="grid">
      {open ? (
        <ItemDetails
          breed={breed}
          species={species}
          averageLifespan={averageLifespan}
          averageWeight={averageWeight}
          coatLength={coatLength}
          colors={colors}
          tailLength={tailLength}
          characteristics={characteristics}
          picture={picture}
          description={description}
          open={open}
          setOpen={setOpen}
        />
      ) : (
        <div
          className="mx-52 my-7 grid grid-cols-3 rounded-lg text-center hover:bg-slate-50"
          onClick={() => setOpen(true)}
        >
          <span className="justify-items-start py-4 pl-6 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-0">
            {breed}
          </span>
          <span className="justify-items-end py-4 px-1 text-start text-sm text-gray-500">
            {characteristics.map((el, i) => {
              if (characteristics[i + 1] === undefined) return el;
              return `${el}, `;
            })}
          </span>
          <span className="justify-items-end py-4 px-3 text-start text-sm text-gray-500">
            {truncateDescription(description)}
          </span>
        </div>
      )}
    </div>
  );
}
