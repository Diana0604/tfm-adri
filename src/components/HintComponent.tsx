import { useContext } from "react";
import { HintContext } from "../contexts/HintContextProvider";

const HintComponent = () => {
  const { currentHint, nextHint, actIndex } = useContext(HintContext);
  return (
    <div className={`soft-background margin-20 ${currentHint ? "padding-5" : undefined}`}>
      {currentHint ? (
        <div className="padding-5">tipo: {currentHint.type}</div>
      ) : undefined}
      {currentHint ? (
        <div className="padding-5">nombre: {currentHint.name}</div>
      ) : undefined}
      {currentHint ? (
        <div className="padding-5">acto: {actIndex}</div>
      ) : undefined}
      <div className="container">
        {currentHint ? (
          <div className="button" onClick={nextHint}>
            Give Hint
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export default HintComponent;
