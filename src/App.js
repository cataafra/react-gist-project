import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import GistList from "./components/GistList";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState(null); // username prop to be used by the children SearchBar snd GistList

  return (
    <div className="main-container">
      <Navbar></Navbar>
      <SearchBar setUsername={setUsername}></SearchBar>
      {username !== null && <GistList username={username}></GistList>}
    </div>
  );
}

export default App;
