import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LOGO from '../assets/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/styles.css';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`sticky-component ${isSticky ? 'sticky' : ''}`}>
      <nav className="navbar navbar-expand-lg sticky-top fixed-top bg-navbar">
        <div className="container-fluid mx-4">
          <Link to="/">
            <img src={LOGO} alt="" />
          </Link>
          <div className="collapse navbar-collapse d-flex justify-content-around collapse-navbar" id="navbarNavAltMarkup">
            <ul className="navbar-nav gap-3">
              <li className={`nav-link ${location.pathname === '/' ? 'nav-item-active' : 'text-white'}`} aria-current="page">
                <Link to="/">Beranda</Link>
              </li>
              <li className={`nav-link ${location.pathname === '/wisata' ? 'nav-item-active' : 'text-white'}`}>
                <Link to="/wisata">Wisata</Link>
              </li>
              <li className={`nav-link ${location.pathname === '/event' ? 'nav-item-active' : 'text-white'}`}>
                <Link to="/event">Acara</Link>
              </li>
              <li className={`nav-link ${location.pathname === '/tentang' ? 'nav-item-active' : 'text-white'}`}>
                <Link to="/tentang">Tentang</Link>
              </li>
            </ul>
          </div>
          <a href="#" className={`btn border ${location.pathname === '/tentang' ? 'nav-item-active' : 'text-white'}`}>
          <Link to="/mitra">Gabung Mitra</Link>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;