import "./GistList.css";
import React, { useEffect, useState } from "react";
import Gist from "./Gist";

const GistList = (props) => {
  const [gistData, setGistData] = useState(null);

  // load the results for the gists asynchronously
  useEffect(() => {
    fetch(`https://api.github.com/users/${props.username}/gists`)
      .then((res) => res.json())
      .then((data) => {
        setGistData(data);
      });
  }, [props.username]);

  const renderGists = () => {
    if (gistData.length > 0) {
      // check if gistData is empty
      return gistData.map((e) => {
        return (
          <React.Fragment key={e.id}>
            <Gist description={e.description} files={e.files}></Gist>
          </React.Fragment>
        );
      });
    } else {
      return <p>No gists available for {props.username}.</p>; // if gistData is empty, display a message
    }
  };

  return (
    <div className="gist-list">
      {gistData ? renderGists() : <p>Loading gists...</p>}
    </div>
  );
};

export default GistList;
