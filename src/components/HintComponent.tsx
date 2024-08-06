import { useContext } from "react";
import { HintContext } from "../contexts/HintContextProvider";

const HintComponent = () => {
  const { currentHint, nextHint } = useContext(HintContext);
  return (
    <div>
      {currentHint ? <div>type: {currentHint.type}</div> : undefined}
      {currentHint ? <div>type: {currentHint.name}</div> : undefined}
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
