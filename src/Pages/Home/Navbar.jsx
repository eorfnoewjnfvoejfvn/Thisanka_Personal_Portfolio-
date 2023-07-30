import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
 
  const [navActive, setNavActive] = useState(false); // Declares a state variable 'navActive' to track the navigation menu's active state

  const toggleNav = () => {   // Function to toggle the navigation menu's active state
    setNavActive(!navActive);
  };
                                 
  const closeMenu = () => { // Function to close the navigation menu
    setNavActive(false);
  };

  useEffect(() => {  // Effect hook to handle changes when the window is resized
    const handleResize = () => {    
      if (window.innerWidth <= 500) {     // Checks if the window's inner width is less than or equal to 500 pixels
        closeMenu;
      }
    };

     window.addEventListener("resize", handleResize);  

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(() => {  // Another effect hook to handle changes when the component initially renders
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []); 

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="public/img/logo.png" alt="thisanka.com" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio 
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="testimonial"
              className="navbar--content"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;