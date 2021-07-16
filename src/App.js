import "./App.css";
import Drawer from "./Drawer";
import Main from "./Main";
import { BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Drawer />
      <Main />
    </div>
  );
}

export default App;
