import "./App.css";
import ArgumentContextProvider from "./contexts/ArgumentContextProvider";
import ManagerComponent from "./components/ManagerComponent";

function App() {
  return (
    <div className="App container">
      <ArgumentContextProvider>
        <ManagerComponent />
      </ArgumentContextProvider>
    </div>
  );
}

export default App;
