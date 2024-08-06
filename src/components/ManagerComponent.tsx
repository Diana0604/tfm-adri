import { CharacterContext } from "../contexts/CharacterContext";
import CharacterComponent from "./CharacterComponent";
import { characters } from "../constants";
import { useContext } from "react";
import { ArgumentContext } from "../contexts/ArgumentContextProvider";

const ManagerComponent = () => {
  const { nextAct } = useContext(ArgumentContext);

  return (
    <div>
      {characters.map((character) => {
        return (
          <CharacterContext.Provider value={character}>
            <CharacterComponent />
          </CharacterContext.Provider>
        );
      })}
      <div className="container">
        <div className="button" onClick={nextAct}>
          Next Act
        </div>
      </div>
    </div>
  );
};

export default ManagerComponent;
