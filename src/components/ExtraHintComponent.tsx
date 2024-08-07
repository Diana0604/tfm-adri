import { useContext } from "react";
import { ArgumentContext } from "../contexts/ArgumentContextProvider";
import { ExtraHintsContext } from "../contexts/ExtraHintContextProvider";

import { extraHints } from "../constants";
import HintComponent from "./HintComponent";

const ExtraHintsComponent = () => {
  const { act } = useContext(ArgumentContext);
  const { hintIndex } = useContext(ExtraHintsContext);

  return (
    <div>
      {act > 5 ? 
        <div>
          <div className="outlined">Extra Hints</div> 
          <HintComponent currentHint={extraHints[hintIndex]} actIndex={6} hintIndex={hintIndex}/>
          </div>
        
        
      : undefined}
    </div>
  );
};

export default ExtraHintsComponent