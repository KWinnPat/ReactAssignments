import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
const Header = () => {
  return (
    <header>
      <img className="logo" src={logo}></img>
      <nav>
        <ul className="nav">
          <li className="home-link">
            <Link to="/">Home</Link>
          </li>
          <li className="about-link">
            <Link to="/">About</Link>
          </li>
          <li className="employees-link">
            <Link to="/">Meet Us</Link>
          </li>
          <li className="booking-link">
            <Link to="/">Book Now</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
