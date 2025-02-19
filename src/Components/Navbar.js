import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <Link className="navbar-brand" to="/">Brain Tumor Detection</Link>
      <div>
        <Link className="btn btn-primary m-2" to="/upload">Upload MRI</Link>
        <Link className="btn btn-success m-2" to="/patients">Patients</Link>
      </div>
    </nav>
  );
}

export default Navbar;
