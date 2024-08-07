import { useContext, useEffect, useState } from "react";
import HintComponent from "./HintComponent";
import { CharacterContext } from "../contexts/CharacterContext";
import { HintContext } from "../contexts/HintContextProvider";
import { ArgumentContext } from "../contexts/ArgumentContextProvider";

const CharacterComponent = () => {
  const character = useContext(CharacterContext);

  const { act } = useContext(ArgumentContext);

  const { leftHints } = useContext(HintContext);

  const [currentHint, setCurrentHint] = useState<Hint>();
  const [hintAct, setHintAct] = useState<number>(0);

  useEffect(() => {
    for (const nextAct in leftHints) {
      //if beyond act return
      if (Number(nextAct) + 1 > act) break;

      //check if active hint for this character
      for (const hint of leftHints[nextAct]) {
        if (hint.belongsTo.includes(character.name)) {
          setHintAct(Number(nextAct) + 1);
          setCurrentHint(hint);
          return;
        }
      }
    }
  }, [act, leftHints]);

  return (
    <div>
      <div className="outlined">
        {character.title} {character.name} {character.surname}
      </div>
      <HintComponent currentHint={currentHint} actIndex={hintAct} />
    </div>
  );
};

export default CharacterComponent;
