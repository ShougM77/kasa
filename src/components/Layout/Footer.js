import React from 'react';
import Logo from "../../images/logo-footer.png";
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer-container">
      <img src={Logo} alt="Logo" />
      <div className="footer-text">&copy; 2024 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;
