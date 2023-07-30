import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  // Manage the navigation menu's active status for each section eg. hero about
  const [navActive, setNavActive] = useState(false);

  // Toggles the navigation menu when hamburger icon is clicked
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  // Closes the navigation menu when cliecked
  const closeMenu = () => {
    setNavActive(false);
  };

  // Handle window resize to close menu on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu(); // Close the menu
      }
    };

    // Listens for window resize events
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close the menu on initial load for smaller screens
  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu(); // Close the menu
    }
  }, []);