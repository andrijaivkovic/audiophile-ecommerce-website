import { NavLink } from "react-router-dom";

import footerLogo from "/images/shared/desktop/logo.svg";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <img className="footer__logo" src={footerLogo} alt="Audiophile logo." />
      <nav id="footer-navigation" className="footer__navigation">
        <ul className="footer__link-list">
          <li className="footer__link">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="footer__link">
            <NavLink to="/headphones">Headphones</NavLink>
          </li>
          <li className="footer__link">
            <NavLink to="/speakers">Speakers</NavLink>
          </li>
          <li className="footer__link">
            <NavLink to="/earphones">Earphones</NavLink>
          </li>
        </ul>
      </nav>
      <p className="footer__body">
        Audiophile is an all in one stop to fulfill your audio needs. We’re a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="footer__copyright">
        Copyright {new Date().getFullYear()}. All Rights Reserved.
      </p>
      <div className="footer__social-container">
        <a
          className="footer__social-link footer__social-link--facebook"
          href="#"
        >
          <p>Facebook</p>
        </a>
        <a
          className="footer__social-link footer__social-link--twitter"
          href="#"
        >
          <p>Twitter</p>
        </a>
        <a
          className="footer__social-link footer__social-link--instagram"
          href="#"
        >
          <p>Instagram</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
