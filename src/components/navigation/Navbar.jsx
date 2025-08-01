import React from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h2>Widget Portfolio</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="divider">Widgets</li>
        <li>
          <Link to="/widget/counter">Counter</Link>
        </li>
        <li>
          <Link to="/widget/toggled-greeting">Toggled Greeting</Link>
        </li>
        <li>
          <Link to="/widget/showHideToggle">Show/Hide Toggle</Link>
        </li>
        <li>
          <Link to="/widget/fontSizer">Font Sizer</Link>
        </li>
        <li>
          <Link to="/widget/textAlignment">Text Alignment</Link>
        </li>
        <li>
          <Link to="/widget/clock">Clock</Link>
        </li>
        <li>
          <Link to="/widget/colorChanger">Color Changer</Link>
        </li>
        <li>
          <Link to="/widget/rgbSlider">RGB Slider</Link>
        </li>
        <li>
          <Link to="/widget/weather">Weather</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
