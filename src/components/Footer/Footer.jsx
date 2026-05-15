import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <section className="footer-container">
      <div className="logo">
        <p>
          Ter <span>r</span>a
        </p>
      </div>
      <div className="links">
        <ul>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/chefs">Our Chefs</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="rights">
        <p>&copy; 2023 Terra Restaurant. All rights reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
