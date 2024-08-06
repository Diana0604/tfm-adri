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

  useEffect(() => {
    setHintIndex(0);
  }, [act]);

  useEffect(() => {
    if (character.hints[act] && character.hints[act][hintIndex])
      setCurrentHint(character.hints[act][hintIndex]);
    else setCurrentHint(undefined)
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

export default HintContextProvider