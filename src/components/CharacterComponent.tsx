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
  const [hintIndex, setHintIndex] = useState<number>(0);

  useEffect(() => {
    for (const nextAct in leftHints) {
      //if beyond act return
      if (Number(nextAct) + 1 > act) {
        setCurrentHint(undefined);
        return;
      }

      //check if active hint for this character
      for (const hintIndex in leftHints[nextAct]) {
        const hint = leftHints[nextAct][hintIndex];
        if (hint.belongsTo.includes(character.name)) {
          setHintAct(Number(nextAct) + 1);
          setCurrentHint(hint);
          setHintIndex(Number(hintIndex));
          return;
        }
      }
    }
    setCurrentHint(undefined);
  }, [act, leftHints, character.name]);

  return (
    <div>
      {currentHint ? (
        <div style={{width: '300px'}}>
          <div className="outlined">
            {character.title} {character.name} {character.surname}
          </div>
          <HintComponent
            currentHint={currentHint}
            actIndex={hintAct}
            hintIndex={hintIndex}
          />
        </div>
      ) : undefined}
    </div>
  );
};

export default CharacterComponent;
