import { createContext, useContext, useEffect, useState } from "react";
import { CharacterContext } from "./CharacterContext";
import { ArgumentContext } from "./ArgumentContextProvider";

interface HintContextProps {
  currentHint?: Hint;
  nextHint: () => void;
}

const initProps: HintContextProps = {
  nextHint: () => {},
};

export const HintContext = createContext<HintContextProps>(initProps);

const HintContextProvider = ({ children }: { children: React.ReactNode }) => {
  const character = useContext(CharacterContext);
  const { act } = useContext(ArgumentContext);
  const [currentHint, setCurrentHint] = useState<Hint>();
  const [hintIndex, setHintIndex] = useState<number>(0);
  const [actIndex, setActIndex] = useState<number>(1);

  useEffect(() => {
    if (currentHint === undefined) {
      setHintIndex(0);
      setActIndex(act);
    }
  }, [act]);

  useEffect(() => {
    if (character.hints[actIndex] && character.hints[actIndex][hintIndex])
      setCurrentHint(character.hints[actIndex][hintIndex]);
    else {
      if (act > actIndex) {
        setActIndex(actIndex + 1);
        setHintIndex(0);
      } else setCurrentHint(undefined);
    }
  }, [hintIndex]);

  const nextHint = () => {
    setHintIndex(hintIndex + 1);
  };

  return (
    <HintContext.Provider value={{ currentHint, nextHint }}>
      {children}
    </HintContext.Provider>
  );
};

export default HintContextProvider;
