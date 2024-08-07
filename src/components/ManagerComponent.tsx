import { CharacterContext } from "../contexts/CharacterContext";
import CharacterComponent from "./CharacterComponent";
import { characters } from "../constants";
import { useContext } from "react";
import { ArgumentContext } from "../contexts/ArgumentContextProvider";

const ManagerComponent = () => {
  const { act, nextAct } = useContext(ArgumentContext);

  return (
    <div>
      <div>acto: {act}</div>
      <div className="horizontal-flex">
      {characters.map((character) => {
        return (
          <CharacterContext.Provider value={character}>
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
    </div>
  );
};

export default ManagerComponent;
