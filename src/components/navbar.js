import React from 'react'
import LOGO from '../assets/logo.svg'
import 'bootstrap/dist/css/bootstrap.css';


const Navbar = () => {
  const collapseStyle = {
    height: '50px'
  };
  
  const bgStyle = {
    background: '#157D92'
  };

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg" style={bgStyle}>
    <div class="container-fluid mx-4">
        <img src={LOGO} alt=""/>
    <div class="collapse navbar-collapse d-flex justify-content-around" style={collapseStyle} id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link text-white active" aria-current="page" href="#">Beranda</a>
        <a class="nav-link text-white" href="#">Wisata</a>
        <a class="nav-link text-white" href="#">Event</a>
        <a class="nav-link text-white" href="#">Tentang</a>
      </div>
    </div>
    <a href="#" class="btn text-white border" >Partnership</a>
    </div>
  </nav>
    </div>
  )
}

export default Navbar