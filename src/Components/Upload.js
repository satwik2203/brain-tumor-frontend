import React, { useState } from "react";

function Upload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    alert("File uploaded successfully!");
  };

  return (
    <div className="container text-center mt-5">
      <h2>Upload MRI Scan</h2>
      <input type="file" className="form-control" onChange={handleFileChange} />
      <button className="btn btn-primary mt-3" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}

export default Upload;
