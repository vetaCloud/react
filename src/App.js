import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);

  const uploadFile = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file");
      return;
    } else if (file.type.split("/")[0] !== "image") {
      alert("Upload only images");
      return;
    }
    const formData = new FormData();
    const config = {
      onUploadProgress: (progressEvent) => console.log(progressEvent.loaded),
    };
    formData.append("file", file);
    const headers = {
      'Content-Type': 'application/json',
      'X_API_KEY': 'VTCD_PRIVATE_0968f2c2a8e42df0325042fd910e32', 'X_ROUTE_NAME': "profile-picture"
    }

    const data = await axios.post(
      "http://localhost:1200/upload", 
      { headers: headers },
      formData,
      config
    );
    console.log(data);
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
