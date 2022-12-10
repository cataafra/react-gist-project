import "./Gist.css";

const Gist = (props) => {
  const files = Object.entries(props.files);

  return (
    <div className="gist">
      <h3 className="gist__desc">{props.description}</h3>
      <div>Files: </div>
      <div className="gist__files">
        {files.map(([filename, fileInfo]) => {
          return (
            <div className="gist__files__elem">
              <div>{filename}</div>
              <a href={fileInfo.raw_url}>See code</a>
              <div>{fileInfo.language}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gist;
