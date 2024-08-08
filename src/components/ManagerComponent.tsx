import { CharacterContext } from "../contexts/CharacterContext";
import CharacterComponent from "./CharacterComponent";
import { characters } from "../constants";
import { useContext } from "react";
import { ArgumentContext } from "../contexts/ArgumentContextProvider";
import ExtraHintsComponent from "./ExtraHintComponent";
import PastHintsList from "./PastHintsList";

const ManagerComponent = () => {
  const { act, nextAct } = useContext(ArgumentContext);

  return (
    <div>
      {/* acto - title */}
      <div>
        <div>acto: {act}</div>
      </div>

      {/* current hints */}
      <div className="horizontal-flex">
        {characters.map((character, index) => {
          return (
            <CharacterContext.Provider key={index} value={character}>
              <CharacterComponent />
            </CharacterContext.Provider>
          );
        })}
      </div>
      <div className="horizontal-flex">
        {/* already given hints */}
        <PastHintsList />

        {/* next act button */}
        <div className="absolute-container">
          <button className="button" onClick={nextAct}>
            Next Act
          </button>
        </div>

        <div className="absolute-container margin-top-40">
          <ExtraHintsComponent />
        </div>
      </div>
    </div>
  );
};

export default ManagerComponent;
