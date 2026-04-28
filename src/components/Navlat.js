// Navlat.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navlat.css";

function Navlat() {
  const [open, setOpen] = useState(true);

  return (
    <div className="nav-container">
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div className={`sidebar ${open ? "active" : "collapsed"}`}>
        <h2 className="logo">Menú</h2>

        <ul className="menu-list">
          <li><Link to="/name">Name</Link></li>
          <li><Link to="/address">Address</Link></li>
          <li><Link to="/phone">Phone</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navlat;