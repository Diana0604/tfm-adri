import { createContext } from "react";

const defaultChar: Character = {
  name: "",
  surname: "",
};

export const CharacterContext = createContext<Character>(defaultChar);
