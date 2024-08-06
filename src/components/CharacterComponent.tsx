import { useContext, useEffect, useState } from "react";
import { ArgumentContext } from "../contexts/ArgumentContextProvider";
import HintComponent from "./HintComponent";

const CharacterComponent = (character: Character) => {
  const { act } = useContext(ArgumentContext);
  const [currentHint, setCurrentHint] = useState<Hint>();

  useEffect(() => {
    if (character.hints[act] && character.hints[act].length > 0)
      setCurrentHint(character.hints[act][0]);
  }, [act]);

  return (
    <div className="character">
      <div>
        {character.title} {character.name} {character.surname}
      </div>
      <HintComponent hint={currentHint} />
    </div>
  );
};

export default CharacterComponent;
