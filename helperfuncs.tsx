import type { ReactNode } from "react";
import { database } from "./database";
import ResultListItem from "./src/components/ResultListItem";

const unfilteredDatabase = database.map((pet) => (
  <ResultListItem
    key={`petId-${pet.id}`}
    breed={pet.breed}
    species={pet.species}
    averageLifespan={pet.averageLifespan}
    averageWeight={pet.averageWeight}
    coatLength={pet.coatLength}
    colors={pet.colors}
    tailLength={pet.tailLength}
    characteristics={pet.characteristics}
    picture={pet.picture}
    description={pet.description}
  />
));

export function dbFilteredBy(
  filter: string,
  searchInput: string
): ReactNode[] | undefined {
  switch (filter) {
    case "breed":
      return unfilteredDatabase.filter((results) =>
        results.props.breed.toLowerCase().includes(searchInput.toLowerCase())
      );
      break;
    case "description":
      return unfilteredDatabase.filter((results) =>
        results.props.description
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
      break;
    case "characteristics":
      return unfilteredDatabase.filter((results) =>
        results.props.characteristics.some((el) =>
          el.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
      break;
  }
}
