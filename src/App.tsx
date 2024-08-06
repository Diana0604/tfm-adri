import "./App.css";
import CharacterComponent from "./components/CharacterComponent";
import { characters } from "./constants";
import ArgumentContextProvider from "./contexts/ArgumentContextProvider";

function App() {
  return (
    <div className="App horizontal-flex">
      <ArgumentContextProvider>
        {characters.map((character) => (
          <CharacterComponent {...character} />
        ))}
      </ArgumentContextProvider>
    </div>
  );
}

export default App;
