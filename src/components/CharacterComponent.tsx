import { useContext } from "react";
import HintComponent from "./HintComponent";
import { CharacterContext } from "../contexts/CharacterContext";
import HintContextProvider from "../contexts/HintContextProvider";

const CharacterComponent = () => {
  const character = useContext(CharacterContext);
  return (
    <div>
      <div className="outlined">
        {character.title} {character.name} {character.surname}
      </div>
      <HintContextProvider>
        <HintComponent />
      </HintContextProvider>
    </div>
  );
};

export default CharacterComponent;
