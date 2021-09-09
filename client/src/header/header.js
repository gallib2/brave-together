import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <nav className="navbar navbar-expand-lg">
        <ul>
          <li className="nav-item">
            <NavLink className="nav-link link-dark" to="/">
              הירשם
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link link-dark" to="/">
              התחבר
            </NavLink>
          </li>
          {/* <li>
            <NavLink className="nav-link" to="/">
              התנתק
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link link-dark" to="/">
              בית
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link link-dark" to="/">
              אודות
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link link-dark" to="/">
              עיצוב ציטוט
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link link-dark" to="/">
              הוספת סיפור
            </NavLink>
          </li> */}
        </ul>
        <ul>
          <li className="nav-item">
            <NavLink to="/">
              <img
                src="https://brave-together.com/wp-content/uploads/2020/04/%D7%A2%D7%95%D7%AA%D7%A7-%D7%A9%D7%9C-Copy-of-%D7%9C%D7%95%D7%92%D7%95-%D7%97%D7%93%D7%A9-%D7%A8%D7%A7%D7%A2-%D7%A9%D7%A7%D7%95%D7%A3.png"
                alt="לוגו"
              ></img>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
