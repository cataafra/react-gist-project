import "./Gist.css";

const Gist = (props) => {
  const gist = {
    id: "test",
    description: "test",
    comments: "test",
    files: [
      {
        filename: "test",
        language: "py",
        raw_url: "/#/",
      },
    ],
  };

  return (
    <li className="gist" key={props.id}>
      <h3 className="gist__desc">{props.description}</h3>
      <div>Files: </div>
      <ul className="gist__files">
        {props.files.map((e) => {
          return (
            <li className="gist__files__elem">
              <div>{e.filename}</div>
              <a href={e.raw_url}>Link</a>
              <div>{e.language}</div>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default Gist;
