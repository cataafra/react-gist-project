import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Gist from "./components/Gist";
import GistList from "./components/GistList";

function App() {
  const gist = {
    id: "test",
    description: "test",
    comments: "test",
    files: [
      {
        filename: "test",
        language: "py",
        raw_url: "/#/",
      },
      {
        filename: "test2",
        language: "js",
        raw_url: "/#/",
      },
    ],
  };

  return (
    <div className="main-container">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <GistList username="vsouza"></GistList>
    </div>
  );
}

export default App;
