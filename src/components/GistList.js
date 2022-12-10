import "./GistList.css";
import React, { useState, useEffect } from "react";
import Gist from "./Gist";

const GistList = (props) => {
  useEffect(() => {
    fetch(`https://api.github.com/users/${props.username}/gists`)
      .then((res) => res.json())
      .then((data) => {
        return (
          <ul className="gistlist">
            {data.map((e) => {
              console.log(e);
              return (
                <Gist
                  id={e.id}
                  description={e.description}
                  files={e.files}
                ></Gist>
              );
            })}
          </ul>
        );
      });
  });
};

export default GistList;
