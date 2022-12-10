import "./SearchBar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    setInputs(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="SearchBar">
      <h2 className="search-header">Search for a user on GitHub</h2>
      <form onSubmit={handleSubmit} className="search">
        <div className="search__at-icon">@</div>
        <input
          className="search__input"
          type="text"
          id="search"
          placeholder="username"
          onChange={handleChange}
        />
        <button className="search__button" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
