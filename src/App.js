import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
// import Gist from "./components/Gist";
import GistList from "./components/GistList";
import Popup from "./components/Popup";

function App() {
  // const gist = {
  //   id: "test",
  //   description: "test",
  //   comments: "test",
  //   files: [
  //     {
  //       filename: "test",
  //       language: "py",
  //       raw_url: "/#/",
  //     },
  //     {
  //       filename: "test2",
  //       language: "js",
  //       raw_url: "/#/",
  //     },
  //   ],
  // };

  return (
    <div className="main-container">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <GistList username="vsouza"></GistList>
      <Popup message="test test"></Popup>
    </div>
  );
}

export default App;
