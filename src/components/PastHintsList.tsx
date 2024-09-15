import { useContext, useEffect } from "react";
import { HintContext } from "../contexts/HintContextProvider";
import PastHint from "./PastHint";

const PastHintsList = () => {
  const { pastHints } = useContext(HintContext);
  useEffect(() => {
    console.log("from use effect");
    console.log(pastHints);
  }, [pastHints]);

  return (
    <div style={{ width: "300px" }}>
      <div className="outlined">Past hints</div>
      {pastHints.map((hint, index) => <PastHint key={index} hint={hint}/>)}
    </div>
  );
};

export default PastHintsList;
