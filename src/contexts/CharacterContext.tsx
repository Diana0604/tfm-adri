import { createContext } from "react";

const defaultChar: Character = {
  name: "",
  surname: "",
  hints: [],
};

export const CharacterContext = createContext<Character>(defaultChar);
