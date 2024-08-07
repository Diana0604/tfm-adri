import { useContext } from "react";
import { HintContext } from "../contexts/HintContextProvider";

interface HintProps {
  currentHint: Hint | undefined;
  actIndex: number;
}

const HintComponent = (props: HintProps) => {
  const { currentHint, actIndex } = props;

  return (
    <div
      className={`soft-background margin-20 ${
        currentHint ? "padding-5" : undefined
      }`}
    >
      {currentHint ? (
        <>
          <div className="padding-5">{currentHint.type}</div>

          <div className="padding-5">{currentHint.name}</div>

          <div className="padding-5">acto {actIndex}</div>

          <div className="container">
            <button className="button">Give Hint</button>
          </div>
        </>
      ) : undefined}
    </div>
  );
};

export default HintComponent;
