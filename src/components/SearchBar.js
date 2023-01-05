import "./SearchBar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setUsername(inputValue);
  };

  return (
    <div className="search-bar">
      <h2 className="search-header">Search for a Github user</h2>
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
