import type { PetInfo } from "../types";
import Image from "next/image";

export default function ItemDetails({
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
  open,
  setOpen,
}: PetInfo) {
  return (
    <div>
      <button type="button" onClick={() => setOpen(false)}>
        Close
      </button>
      <div>
        <div className="bg-slate-200">
          <div>
            <Image
              src={picture}
              width={200}
              height={200}
              alt={`A picture of a ${breed} ${species}.`}
            />
          </div>
          <div className="text-xl">{breed}</div>
          <div className="text-sm">{description}</div>
        </div>

        <div>
          <p>Average lifespan: {averageLifespan} years</p>
          <p>Average weight: {averageWeight} pounds</p>
          <p>Coat length: {coatLength}</p>
          <p>Tail length: {tailLength}</p>
          <ul>
            Coat colors include...
            {colors.map((color, i) => (
              <li key={`color${i}`}>- {color}</li>
            ))}
          </ul>
          <ul>
            Characteristics:{" "}
            {characteristics.map((characteristic, i) => (
              <li key={`characteristic${i}`}>- {characteristic}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
