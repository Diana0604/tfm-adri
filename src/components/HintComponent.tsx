import { useContext } from "react";
import { HintContext } from "../contexts/HintContextProvider";

const HintComponent = () => {
  const { currentHint, nextHint, actIndex } = useContext(HintContext);
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

          {currentHint.duplicated ? (
            <div className="padding-5">
              compartida con {currentHint.duplicated}
            </div>
          ) : undefined}

          <div className="container">
            <button className="button" onClick={nextHint}>
              Give Hint
            </button>
          </div>
        </>
      ) : undefined}
    </div>
  );
};

export default HintComponent;
