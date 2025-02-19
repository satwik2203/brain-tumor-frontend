import React, { useState } from 'react';
import './style.css'; // Import your CSS file

function App() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let fileInput = document.getElementById('fileUpload');
    let file = fileInput.files[0];

    if (!file) {
      setStatus("Please select a file.");
      return;
    }

    // Simulate the upload process
    setStatus("Uploading...");

    // Simulate file upload
    setTimeout(() => {
      setStatus("Upload successful!");
    }, 2000);
  };

  return (
    <div className="App">
      <header>
        <h1>Brain Tumor Detection System</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#upload">Upload Image</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <h2>Welcome to the Brain Tumor Detection System</h2>
        <p>Upload your medical images for tumor detection.</p>
      </section>

      <section id="upload">
        <h2>Upload Brain Scan Images</h2>
        <form id="uploadForm" onSubmit={handleSubmit} encType="multipart/form-data">
          <label htmlFor="fileUpload">Choose MRI or CT Image:</label>
          <input type="file" id="fileUpload" name="fileUpload" accept=".jpg, .jpeg, .png, .dicom" required />
          <button type="submit">Upload</button>
        </form>
        <div id="status">{status}</div>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>This system helps medical professionals detect brain tumors using machine learning and advanced imaging analysis.</p>
      </section>

      <footer>
        <p>&copy; 2025 Brain Tumor Detection System</p>
      </footer>
    </div>
  );
}

export default App;
