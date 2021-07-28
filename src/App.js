import "./App.css";
import Drawer from "./Drawer";
import Main from "./Main";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Drawer />
        <Main />
      </div>
    </AuthProvider>
  );
}

export default App;
