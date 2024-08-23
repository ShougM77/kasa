import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../images/logo.png";
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/Apropos">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
