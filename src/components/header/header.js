import { useState } from "react";
import "./header.css";
import MaterialIcon, { colorPalette } from "material-icons-react";

import { Link } from "react-router-dom";

const Header = () => {

  const showMenu = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.style.display = "block"
      x.className += " responsive";
      
    } else {
      x.className = "topnav";
      x.style.display = "none";
    }
  };

  return (
    <nav className="headerNav">
      <div className="headerNav-brand">
        <p>
          <span className="logo">/AP </span> ARINDAM PATRA
        </p>
        <li className="responsiveMenuIcon" onClick={()=>{
            showMenu();
        }}>
            <MaterialIcon icon="menu"/>
        </li>
      </div>

      <div className="headerNav-list">
        <ul className="topnav" id="myTopnav">
          <li>
            {" "}
            <Link to="/">HOME</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            {" "}
            <Link to="/myinterest">MY INTEREST</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact">CONTACT</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/myworks">MY WORKS</Link>{" "}
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Header;
