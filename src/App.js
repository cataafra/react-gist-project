import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
