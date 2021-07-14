import "./App.css";
import Drawer from "./Drawer";
import Main from "./Main";
import { BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Drawer />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
