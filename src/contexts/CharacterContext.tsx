import { createContext } from "react";

const defaultChar: Character = {
  surname: "",
  hints: [],
};

export const CharacterContext = createContext<Character>(defaultChar);
