import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [file, setFile] = useState(null);

  const uploadFile = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file");
    } else if (file.type !== "image/jpeg" || file.type !== "image/png") {
      alert("Upload only images");
    }
  };

  return (
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <form onSubmit={uploadFile}>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Default file input example
          </label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            className="form-control"
            type="file"
            id="formFile"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App;
