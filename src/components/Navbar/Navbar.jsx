import "./Navbar.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateContact = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="navbar">
      <nav>
        {/* Logo */}
        <div className="logo" onClick={handleNavigate}>
          <p>
            Ter<span>r</span>a
          </p>
        </div>

        {/* Desktop linkler */}
        <div className="pages">
          <ul>
            <li>
              <NavLink to="/" onClick={handleScrollToTop}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" onClick={handleScrollToTop}>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleScrollToTop}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/our-chefs" onClick={handleScrollToTop}>
                Our Chefs
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" onClick={handleScrollToTop}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleScrollToTop}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Rezervasyon butonu + hamburger ikonu */}
        <div className="reservation-btn">
          {/* Mobilde hamburger, desktopda gizli */}
          {isMenuOpen ? (
            <IoCloseOutline className="menu-icon" onClick={toggleMenu} />
          ) : (
            <HiMenuAlt3 className="menu-icon" onClick={toggleMenu} />
          )}
          {/* Desktopda rezervasyon butonu, mobilde gizli */}
          <button onClick={handleNavigateContact}>Reservation</button>
        </div>
      </nav>

      {/* Mobil menü */}
      {isMenuOpen && (
        <div className="mobile-menu-container">
          {/* Overlay — dışına tıklayınca kapanır */}
          <div className="overlay-background" onClick={toggleMenu} />

          <div className="mobile-menu">
            {/* Logo */}
            <div className="mobile-logo">
              <p>
                Ter<span>r</span>a
              </p>
              <p>Restaurant</p>
            </div>

            {/* Navigasyon linkleri */}
            <ul>
              <li>
                <NavLink to="/" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" onClick={toggleMenu}>
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={toggleMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/our-chefs" onClick={toggleMenu}>
                  Our Chefs
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" onClick={toggleMenu}>
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={toggleMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Ayraç */}
            <div className="mobile-divider" />

            {/* Rezervasyon butonu */}
            <div className="mobile-reservation-btn">
              <button onClick={handleNavigateContact}>Reservation</button>
            </div>

            {/* Copyright */}
            <div className="mobile-rights">
              <p>&copy; 2025 Terra Restaurant. All rights reserved.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Navbar;
