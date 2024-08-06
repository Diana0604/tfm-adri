import { createContext } from "react";
import "./App.css";
import CharacterComponent from "./components/CharacterComponent";
import { characters } from "./constants";
import ArgumentContextProvider from "./contexts/ArgumentContextProvider";
import { CharacterContext } from "./contexts/CharacterContext";

function App() {
  return (
    <div className="App horizontal-flex">
      <ArgumentContextProvider>
        {characters.map((character) => {
          return (
            <CharacterContext.Provider value={character}>
              <CharacterComponent />
            </CharacterContext.Provider>
          );
        })}
      </ArgumentContextProvider>
    </div>
  );
}

export default App;
