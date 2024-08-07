import "./App.css";
import ArgumentContextProvider from "./contexts/ArgumentContextProvider";
import ManagerComponent from "./components/ManagerComponent";
import HintContextProvider from "./contexts/HintContextProvider";

function App() {
  return (
    <div className="App container">
      <ArgumentContextProvider>
        <HintContextProvider>
          <ManagerComponent />
        </HintContextProvider>
      </ArgumentContextProvider>
    </div>
  );
}

export default App;
