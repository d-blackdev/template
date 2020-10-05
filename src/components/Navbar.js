import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import { Button } from "../components/Button";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <div className="container navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <MdFingerprint className="navbar-icon" />
            KENNIX
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink className="nav-links" to="/" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-links" to="/services" onClick={closeMobileMenu}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-links" to="/products" onClick={closeMobileMenu}>
                Products
              </NavLink>
            </li>
            <li className="nav-btn">
              {button ? (
                <NavLink className="btn-link" to="/user/register" onClick={closeMobileMenu}>
                  <Button buttonStyle="btn--outline">SIGN UP</Button>
                </NavLink>
              ) : (
                <NavLink className="btn-link" to="/user/register" onClick={closeMobileMenu}>
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    SIGN UP
                  </Button>
                </NavLink>
              )}
              {button ? (
                <NavLink className="btn-link" to="/user/login" onClick={closeMobileMenu}>
                  <Button buttonStyle="btn--outline">LOGIN</Button>
                </NavLink>
              ) : (
                <NavLink className="btn-link" to="/user/login" onClick={closeMobileMenu}>
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    LOGIN
                  </Button>
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
