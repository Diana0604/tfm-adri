import React, { createContext, useState } from "react";

interface ExtraHintsContextProps {
  hintIndex: number;
  nextExtraHint: () => void;
}

const initProps: ExtraHintsContextProps = {
  hintIndex: 0,
  nextExtraHint: () => {},
};

export const ExtraHintsContext = createContext<ExtraHintsContextProps>(initProps);

const ExtraHintsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [hintIndex, setHintIndex] = useState<number>(0);

  const nextExtraHint = () => {
    console.log('next extra hint: ', hintIndex + 1)
    setHintIndex(hintIndex + 1);
  };

  return (
    <ExtraHintsContext.Provider value={{ hintIndex, nextExtraHint }}>
      {children}
    </ExtraHintsContext.Provider>
  );
};

export default ExtraHintsContextProvider;
