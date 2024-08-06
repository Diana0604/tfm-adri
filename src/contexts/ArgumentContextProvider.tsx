import { createContext, useState } from "react";

interface ArgumentProps {
  act: number;
  nextAct: () => void;
}

const initProps: ArgumentProps = {
  act: 1,
  nextAct: () => {},
};

export const ArgumentContext = createContext<ArgumentProps>(initProps);

const ArgumentContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [act, setAct] = useState<number>(1);

  const nextAct = () => {
    setAct(act + 1);
  };

  return (
    <ArgumentContext.Provider value={{ act, nextAct }}>
      {children}
    </ArgumentContext.Provider>
  );
};

export default ArgumentContextProvider;
