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
    <>
      <div className="my-4 rounded-xl bg-slate-50 p-5 drop-shadow-lg">
        <div className="grid">
          <button
            className="justify-self-end rounded-md bg-red-100 px-3 py-1 hover:bg-red-200"
            type="button"
            onClick={() => setOpen(false)}
          >
            X
          </button>
          <div className="my-2 justify-self-center py-1 text-4xl">
            The {breed}
          </div>
        </div>
        <div className="grid grid-cols-3 rounded bg-white drop-shadow">
          <div className="col-span-1 flex shrink-0">
            <Image
              className="justify-content-center m-2 bg-white object-contain p-2 drop-shadow"
              src={picture}
              width={200}
              height={200}
              alt={`A picture of a ${breed} ${species}.`}
            />
          </div>
          <div className="col-span-2 p-2">{description}</div>
        </div>

        <div className="my-4 grid grid-cols-3">
          <div className="col-span-1 mx-5 rounded-sm bg-white py-2 text-center drop-shadow">
            <p>Average lifespan: {averageLifespan} years</p>
            <p>Average weight: {averageWeight} pounds</p>
            <p>Tail length: {tailLength}</p>
          </div>
          <div className="col-span-1 mx-5 rounded-sm bg-white py-2 text-center drop-shadow">
            <p>Coat length: {coatLength}</p>
            <ul>
              Coat colors include...
              {colors.map((color, i) => (
                <li key={`color${i}`}>- {color}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 mx-5 rounded-sm bg-white py-2 text-center drop-shadow">
            <ul>
              Characteristics:{" "}
              {characteristics.map((characteristic, i) => (
                <li key={`characteristic${i}`}>- {characteristic}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
