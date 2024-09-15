import { useContext } from "react";
import { HintContext } from "../contexts/HintContextProvider";
import PlaySound from "./PlaySound";

interface HintProps {
  currentHint: Hint;
  actIndex: number;
  hintIndex: number;
}

const HintComponent = (props: HintProps) => {
  const { giveHint } = useContext(HintContext);

  const { currentHint, actIndex, hintIndex } = props;

  const handleGiveHint = () => giveHint(actIndex, hintIndex);

  return (
    <div
      className={`soft-background margin-20 padding-5`}
      style={{ minHeight: "200px" }}
    >
      <>
        <div className="padding-5">{currentHint.type}</div>

        <div className="padding-5">{currentHint.name}</div>

        <div className="padding-5">acto {actIndex}</div>

        {currentHint.audio ? <PlaySound src={currentHint.audio} /> : undefined}

        <div className="container">
          <button className="button" onClick={handleGiveHint}>
            Give Hint
          </button>
        </div>
      </>
    </div>
  );
};

export default HintComponent;
