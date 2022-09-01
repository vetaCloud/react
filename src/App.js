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
    }

    const formData = new FormData();
    const config = {
      onUploadProgress: (progressEvent) => console.log(progressEvent.loaded),
    };
    formData.append("file", file);

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      X_API_KEY: "VTCD_PRIVATE_dee91a7c05bdaf5f648ef378318aca",
      X_ROUTE_NAME: "posts-images"
    };

    const data = await axios({
      method: 'post',
      headers: headers,
      url: "http://localhost/client/image/50/50/10",
      data: formData
    })
    console.log(data)
  }


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