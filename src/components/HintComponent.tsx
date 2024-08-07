import { useContext } from "react";
import { HintContext } from "../contexts/HintContextProvider";

const HintComponent = () => {
  const { currentHint, nextHint, actIndex } = useContext(HintContext);
  return (
    <div>
      {currentHint ? <div>tipo: {currentHint.type}</div> : undefined}
      {currentHint ? <div>nombre: {currentHint.name}</div> : undefined}
      {currentHint ? <div>acto: {actIndex}</div> : undefined}
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
