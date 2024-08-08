import { createContext, useContext, useState } from "react";
import { hints } from "../constants";
import { ExtraHintsContext } from "./ExtraHintContextProvider";

interface HintContextProps {
  leftHints: Hint[][];
  pastHints: Hint[];
  giveHint: (act: number, hintIndex: number) => void;
}

const initProps: HintContextProps = {
  leftHints: [],
  pastHints: [],
  giveHint: () => {},
};

export const HintContext = createContext<HintContextProps>(initProps);

const HintContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { nextExtraHint } = useContext(ExtraHintsContext);

  const [leftHints, setLeftHints] = useState<Hint[][]>(hints);
  const [pastHints, setPastHints] = useState<Hint[]>([]);

  const giveHint = (act: number, hintIndex: number) => {
    if (act > 5) {
      nextExtraHint();
      return;
    }

    //update left hints
    const currentHints: Hint[][] = JSON.parse(JSON.stringify(leftHints));
    const hintGiven: Hint[] = currentHints[act - 1].splice(hintIndex, 1);
    setLeftHints(currentHints);

    //update past hints
    if (hintGiven[0].type === "Pista Disponible") return;
    const previousPastHints = JSON.parse(JSON.stringify(pastHints));
    previousPastHints.push(hintGiven[0]);
    setPastHints(previousPastHints);
    console.log(previousPastHints);
  };

  return (
    <HintContext.Provider value={{ leftHints, giveHint, pastHints }}>
      {children}
    </HintContext.Provider>
  );
};

export default HintContextProvider;
