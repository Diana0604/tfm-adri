import { createContext, useState } from "react";

interface ArgumentProps {
  act: number;
}

export const ArgumentContext = createContext<ArgumentProps>({ act: 1 });

const ArgumentContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [act, setAct] = useState<number>(1);

  return (
    <ArgumentContext.Provider value={{ act }}>
      {children}
    </ArgumentContext.Provider>
  );
};

export default ArgumentContextProvider;
