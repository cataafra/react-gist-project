import "./SearchBar.css";
import { useState } from "react";

const SearchBar = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <div className="search-header">Search for a user on GitHub</div>
      <form onSubmit={handleSubmit} className="search">
        <input className="search__input">type==""</input>
      </form>
    </>
  );
};

export default SearchBar;
