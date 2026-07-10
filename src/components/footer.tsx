import { Link } from "react-router-dom";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div>
          <span className="footer-eyebrow">Be part of the change</span>
          <h2>Help build resilient communities.</h2>
        </div>
        <Link to="/donation-features" className="footer-cta-button">
          Support our mission <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-brand-lockup">
            <img src="/images/logo-white.png" alt="Kosi Seva Sadan" className="footer-logo" />
            <div>
              <strong>Kosi Seva Sadan</strong>
              <span>Restoring hope. Reviving communities.</span>
            </div>
          </Link>
          <p>
            Working alongside communities in Bihar since 1981 to advance equity,
            resilient livelihoods, and sustainable development.
          </p>
          <div className="footer-socials" aria-label="Social media">
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </div>

        <div className="footer-nav-group">
          <h3>Explore</h3>
          <Link to="/who-we-are">About us</Link>
          <Link to="/team">Our team</Link>
          <Link to="/latest-news">News & stories</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-nav-group">
          <h3>Our work</h3>
          <Link to="/women-empowerment">Women empowerment</Link>
          <Link to="/health-nutrition">Health & nutrition</Link>
          <Link to="/education-awareness">Education</Link>
          <Link to="/drr-climate">Climate resilience</Link>
        </div>

        <div className="footer-contact-group">
          <h3>Connect</h3>
          <a href="mailto:contact@kosisevasadan.org"><Mail size={17} /> kosisevasadan@gmail.com</a>
          <a href="tel:+919876543210"><Phone size={17} /> +91 9113124943</a>
          <span><MapPin size={17} /> Bihar, India</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kosi Seva Sadan. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/terms-conditions">Terms</Link>
          <Link to="/copyright">Copyright</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
