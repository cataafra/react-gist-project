import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GistList from "./components/GistList";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState(null); // username prop to be used by the children SearchBar snd GistList
  document.title = "Github Gist Search";

  return (
    <div className="main-container">
      <Header></Header>
      <SearchBar setUsername={setUsername}></SearchBar>
      {username !== null && <GistList username={username}></GistList>}
      <Footer></Footer>
    </div>
  );
}

export default App;
