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

  return (
    <>
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
        <></>
      )}
      <div className="bg-slate-200" onClick={() => setOpen(true)}>
        <div className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
          {breed}
        </div>
        <div className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
          {species}
        </div>
        <div className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">
          {averageLifespan}
        </div>
      </div>
    </>
  );
}
