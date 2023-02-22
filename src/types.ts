import type { Dispatch, SetStateAction } from "react";

export type PetInfo = {
  key?: string;
  breed: string;
  species: string;
  averageLifespan: number | string;
  averageWeight: number;
  coatLength: string;
  colors: string[];
  tailLength: string;
  characteristics: string[];
  picture: string;
  description: string;
  open: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>
};