import { CharacterContext } from "../contexts/CharacterContext";
import CharacterComponent from "./CharacterComponent";
import { characters } from "../constants";
import { useContext } from "react";
import { ArgumentContext } from "../contexts/ArgumentContextProvider";
import ExtraHintsComponent from "./ExtraHintComponent";

const ManagerComponent = () => {
  const { act, nextAct } = useContext(ArgumentContext);

  return (
    <div>
      <div>acto: {act}</div>
      <div className="horizontal-flex">
        {characters.map((character, index) => {
          return (
            <CharacterContext.Provider key={index} value={character}>
              <CharacterComponent />
            </CharacterContext.Provider>
          );
        })}
      </div>
      <div className="container padding-5">
        <button className="button" onClick={nextAct}>
          Next Act
        </button>
      </div>

      <ExtraHintsComponent/>
    </div>
  );
};

export default ManagerComponent;
