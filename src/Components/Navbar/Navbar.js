import React from "react";
import "./Navbar.css";
import img from "../../Assets/images/netflix-logo.png";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { FaRegBell } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import { IconContext } from "react-icons";

const Navbar = () => {
  const navbarClickables = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "My List",
    "Browse by language",
  ];

  return (
    <div className="navbar-container">
      <img className="navbar-logo" src={img} alt="netflix-logo" />
      <div className="navbar-left-side">
        <ul className="navbar-clickables-list">
          {navbarClickables.map((clickable) => (
            <li className="navbar-clickables">{clickable}</li>
          ))}
        </ul>
      </div>
      <div className="navbar-right-side">
        <IconContext.Provider value={{ color: "white", size: "1.5rem", className: "navbar-icon-styling" }}>
          <HiMiniMagnifyingGlass />
        </IconContext.Provider>
        <ul className="navbar-clickables-list">
        <li className="navbar-clickables">Children</li>
        </ul>
        <IconContext.Provider value={{ color: "white", size: "1.5rem", className: "navbar-icon-styling" }}>
          <FaRegBell />
        </IconContext.Provider>
        <div className = "navbar-profile-section">
        <img src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className="navbar-user-profile" alt = "profile-img"/>
        <IconContext.Provider value={{ color: "white", size: "1.5rem",  className: "navbar-icon-styling" }}>
        <MdArrowDropDown />
        </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
