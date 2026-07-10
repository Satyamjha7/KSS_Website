import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Heart, Menu, X } from "lucide-react";
import "./Styles.css";

type DropdownKey = "about" | "what" | "res" | "gallery";

const Navbar = () => {
  const [dropdown, setDropdown] = useState<Record<DropdownKey, boolean>>({
    about: false,
    what: false,
    res: false,
    gallery: false,
  });

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1120) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resetDropdowns = () => {
    setDropdown({ about: false, what: false, res: false, gallery: false });
  };

  const toggleDropdown = (menu: DropdownKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdown((prev) => ({
      about: false,
      what: false,
      res: false,
      gallery: false,
      [menu]: !prev[menu],
    }));
  };

  const openDropdown = (menu: DropdownKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdown({ about: false, what: false, res: false, gallery: false, [menu]: true });
  };

  const scheduleDropdownClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      resetDropdowns();
    }, 350);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    resetDropdowns();
  };

  const toggleMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (menuOpen) resetDropdowns();
    setMenuOpen((prev) => !prev);
  };

  const dropdownTrigger = (key: DropdownKey, label: string) => (
    <button
      type="button"
      className="mouse-event"
      onClick={() => toggleDropdown(key)}
      aria-expanded={dropdown[key]}
    >
      {label}<ChevronDown size={15} />
    </button>
  );

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`} aria-label="Primary navigation">
      <div className="logo-container">
        <Link to="/" onClick={closeMenu}>
          <img
            src={scrolled ? "/images/logo-png.png" : "/images/logo-white.png"}
            alt="Kosi Seva Sadan Logo"
            className="logo-img"
          />
        </Link>
        <div className="logo-text">
          <span>Kosi Seva Sadan</span>
          <p className="slogan">Restoring hope. Reviving communities.</p>
        </div>
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
        {menuOpen ? <X /> : <Menu />}
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>

          <li
            onMouseEnter={() => !menuOpen && openDropdown("about")}
            onMouseLeave={() => !menuOpen && scheduleDropdownClose()}
          >
            {dropdownTrigger("about", "About us")}
            {dropdown.about && (
              <div className="dropdown-menu" onMouseEnter={() => openDropdown("about")} onMouseLeave={scheduleDropdownClose}>
                <Link to="/who-we-are" onClick={closeMenu}>Who We Are</Link>
                <Link to="/team" onClick={closeMenu}>The Team</Link>
                <Link to="/values" onClick={closeMenu}>Our Values</Link>
                <Link to="/policies" onClick={closeMenu}>KSS Policies</Link>
                <Link to="/financials" onClick={closeMenu}>Financials</Link>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => !menuOpen && openDropdown("what")}
            onMouseLeave={() => !menuOpen && scheduleDropdownClose()}
          >
            {dropdownTrigger("what", "Our work")}
            {dropdown.what && (
              <div className="dropdown-menu" onMouseEnter={() => openDropdown("what")} onMouseLeave={scheduleDropdownClose}>
                <Link to="/women-empowerment" onClick={closeMenu}>Women Empowerment</Link>
                <Link to="/health-nutrition" onClick={closeMenu}>Health & Nutrition</Link>
                <Link to="/watsan" onClick={closeMenu}>Water & Sanitation</Link>
                <Link to="/education-awareness" onClick={closeMenu}>Education & Awareness</Link>
                <Link to="/child-rights" onClick={closeMenu}>Child Rights</Link>
                <Link to="/drr-climate" onClick={closeMenu}>Climate Change</Link>
                <Link to="/skills-development" onClick={closeMenu}>Skills Development</Link>
                <Link to="/sustainable-agriculture" onClick={closeMenu}>Sustainable Agriculture</Link>
                <Link to="/environment" onClick={closeMenu}>Environment & Clean Energy</Link>
                <Link to="/livelihood-promotion" onClick={closeMenu}>Livelihood Promotion</Link>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => !menuOpen && openDropdown("res")}
            onMouseLeave={() => !menuOpen && scheduleDropdownClose()}
          >
            {dropdownTrigger("res", "Resources")}
            {dropdown.res && (
              <div className="dropdown-menu" onMouseEnter={() => openDropdown("res")} onMouseLeave={scheduleDropdownClose}>
                <Link to="/annual-report" onClick={closeMenu}>Annual Report</Link>
                <Link to="/fcra" onClick={closeMenu}>FCRA</Link>
                <Link to="/organization-docs" onClick={closeMenu}>Organization Docs</Link>
                <Link to="/careers" onClick={closeMenu}>Careers</Link>
                <Link to="/stories" onClick={closeMenu}>Stories</Link>
              </div>
            )}
          </li>

          <li
            onMouseEnter={() => !menuOpen && openDropdown("gallery")}
            onMouseLeave={() => !menuOpen && scheduleDropdownClose()}
          >
            {dropdownTrigger("gallery", "Media")}
            {dropdown.gallery && (
              <div className="dropdown-menu" onMouseEnter={() => openDropdown("gallery")} onMouseLeave={scheduleDropdownClose}>
                <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
                <Link to="/paper-clips" onClick={closeMenu}>Paper Clips</Link>
              </div>
            )}
          </li>

          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li className="mobile-donate"><Link to="/donation-features" onClick={closeMenu}><Heart size={17} /> Donate</Link></li>
        </ul>
      </div>

      <div className="nav-actions">
        <Link to="/donation-features" className="donate-btn"><Heart size={17} /> Donate now</Link>
      </div>
    </nav>
  );
};

export default Navbar;
