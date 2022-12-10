import "./GistList.css";
import React, { useEffect, useState } from "react";
import Gist from "./Gist";

const GistList = (props) => {
  const [gistData, setGistData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.username}/gists`)
      .then((res) => res.json())
      .then((data) => {
        setGistData(data);
      });
  });

  const renderGists = () => {
    return gistData.map((e) => {
      return (
        <React.Fragment key={e.id}>
          <Gist id={e.id} description={e.description} files={e.files}></Gist>
        </React.Fragment>
      );
    });
  };

  return (
    <div className="gist-list">
      {gistData ? renderGists() : <p>Loading gists...</p>}
    </div>
  );
};

export default GistList;
