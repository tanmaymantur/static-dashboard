import logo from "./logo.svg";
import "./App.css";
import PrimarySearchAppBar from "./components/AppBar";
import MiniDrawer from "./components/MiniDrawer";

function App() {
  return (
    <div
      style={{
        background: "black",
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <MiniDrawer />
    </div>
  );
}

export default App;
