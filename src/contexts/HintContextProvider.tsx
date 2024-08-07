import { createContext, useState } from "react";
import { hints } from "../constants";

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
  const [leftHints, setLeftHints] = useState<Hint[][]>(hints);

  const giveHint = (act: number, hintIndex: number) => {
    const currentHints: Hint[][] = JSON.parse(JSON.stringify(leftHints));
    currentHints[act].splice(hintIndex, 1);
    setLeftHints(currentHints);
  };

  return (
    <HintContext.Provider value={{ leftHints, giveHint }}>
      {children}
    </HintContext.Provider>
  );
};

export default HintContextProvider;
