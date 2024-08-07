import "./App.css";
import ArgumentContextProvider from "./contexts/ArgumentContextProvider";
import ManagerComponent from "./components/ManagerComponent";
import HintContextProvider from "./contexts/HintContextProvider";
import ExtraHintsContextProvider from "./contexts/ExtraHintContextProvider";

function App() {
  return (
    <div className="App container">
      <ArgumentContextProvider>
        <ExtraHintsContextProvider>
          <HintContextProvider>
            <ManagerComponent />
          </HintContextProvider>
        </ExtraHintsContextProvider>
      </ArgumentContextProvider>
    </div>
  );
}

export default App;
