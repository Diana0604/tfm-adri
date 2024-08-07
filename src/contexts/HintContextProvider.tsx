import { createContext, useContext, useState } from "react";
import { hints } from "../constants";
import { ExtraHintsContext } from "./ExtraHintContextProvider";

interface HintContextProps {
  leftHints: Hint[][];
  giveHint: (act: number, hintIndex: number) => void;
}

const initProps: HintContextProps = {
  leftHints: [],
  giveHint: () => {},
};

export const HintContext = createContext<HintContextProps>(initProps);

const HintContextProvider = ({ children }: { children: React.ReactNode }) => {

  const {nextExtraHint} = useContext(ExtraHintsContext)

  const [leftHints, setLeftHints] = useState<Hint[][]>(hints);

  const giveHint = (act: number, hintIndex: number) => {
    
    if(act > 5) {
      nextExtraHint();
      return;
    }
    
    const currentHints: Hint[][] = JSON.parse(JSON.stringify(leftHints));
    currentHints[act - 1].splice(hintIndex, 1);
    console.log(currentHints);
    setLeftHints(currentHints);
  };

  return (
    <HintContext.Provider value={{ leftHints, giveHint }}>
      {children}
    </HintContext.Provider>
  );
};

export default HintContextProvider;
