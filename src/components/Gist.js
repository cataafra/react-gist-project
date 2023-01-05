import React from "react";
import "./Gist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Gist = (props) => {
  const labelSet = new Set();
  const files = Object.entries(props.files);

  const langColors = {
    // object holding the different colors for specific languages
    Python: "#4B8BBE",
    JavaScript: "#F7DF1E",
    Go: "#00A3CC",
    Java: "#DB4839",
    C: "#00589C",
    "C++": "#00589C",
  };

  const renderFiles = (files) => {
    return (
      <div className="gist__files">
        {files.map(([filename, fileInfo]) => {
          return (
            <React.Fragment key={filename}>
              <a href={fileInfo.raw_url} className="file">
                {fileInfo.filename}
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ fontSize: "x-small" }}
                />
              </a>
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  const renderLabels = (files) => {
    if (files) {
      files.forEach(([filename, fileInfo]) => {
        // add the languages used in the files
        if (fileInfo.language) labelSet.add(fileInfo.language);
      });
    }

    return (
      // create and return the labels for the languages
      <div className="gist__labels">
        {Array.from(labelSet).map((label) => {
          return (
            <React.Fragment key={label}>
              <div
                className="label"
                style={{
                  backgroundColor: langColors[label] || "lightgray",
                }}
              >
                {label}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  return (
    <div className="gist">
      {renderLabels(files)}
      <h3 className="gist__desc">
        {props.description || "Missing description"}
      </h3>
      <div>Files: </div>
      {renderFiles(files)}
    </div>
  );
};

export default Gist;
