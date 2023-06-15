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
          <div class="collapse navbar-collapse d-flex justify-content-around collapse-navbar" id="navbarNavAltMarkup">
            <ul class="navbar-nav">
              <li class="nav-link text-white active" aria-current="page"><Link to="/">Beranda</Link></li>
              <li class="nav-link text-white"><Link to="/wisata">Wisata</Link></li>
              <li class="nav-link text-white"><Link to="/event">Acara</Link></li>
              <li class="nav-link text-white"><Link to="/tentang">Tentang</Link></li>
            </ul>
          </div>
          <li class="btn text-white border" ><Link to="/mitra">Gabung Mitra</Link></li>
          </div>
      </nav>
    </div>
    );
  }
}

export default Navbar