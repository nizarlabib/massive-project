import React from 'react'
import LOGO from '../assets/logo.svg'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/styles.css'; 
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSticky: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
      this.setState({ isSticky: true });
    } else {
      this.setState({ isSticky: false });
    }
  }

  render() {
    const { isSticky } = this.state;

    return (
    <div className={`sticky-component ${isSticky ? 'sticky' : ''}`}>
      <nav class="navbar navbar-expand-lg sticky-top fixed-top bg-navbar">
          <div class="container-fluid mx-4">
              <Link to="/"><img src={LOGO} alt=""/></Link>
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
          <Link to="/">Gabung Mitra</Link>
          </a>
      </nav>
    </div>
    );
  }
}

export default Navbar
