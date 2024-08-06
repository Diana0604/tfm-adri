import "./App.css";
import CharacterComponent from "./components/CharacterComponent";
import { characters } from "./constants";

function App() {
  return (
    <div className="App horizontal-flex">
      {characters.map((character) => (
        <CharacterComponent {...character} />
      ))}
    </div>
  );
}

export default App;
