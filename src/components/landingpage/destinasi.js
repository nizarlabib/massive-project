import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../styles/styles.css'; 
import TEGALMAS from '../../assets/landingpage/tegalmas.svg'
import TEROPONG from '../../assets/landingpage/teropong.svg'
import WAYKAMBAS from '../../assets/landingpage/waykambas.svg'
import MUSEUM from '../../assets/landingpage/museum.svg'
import PANTAI from '../../assets/landingpage/pantai.svg'
import PERPUSTAKAAN from '../../assets/landingpage/perpustakaan.svg'

const Destinasi = () => {
  return (
    <section class="container-fluid">
        <div class="d-sm-flex align-items-center p-4 m-3">
            <h1 class="fw-bolder text-black">Destinasi Populer</h1>
        </div>
        
        <div class="row justify-content-around mb-5 mx-1">
        
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={TEGALMAS} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Tegal Mas</h4>
                </div>
            </a>
            </div>
            </div>
        
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={TEROPONG} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Teropong Kota</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={WAYKAMBAS} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Way Kambas</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={MUSEUM} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Museum Lampung</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={PANTAI} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Pantai Gigi Hiu</h4>
                </div>
            </a>
            </div>
            </div>
            
            <div class="col-xl-auto col-md-6 mb-4">
            <div class="image-container position-relative">
                <a href="">
                <img src={PERPUSTAKAAN} alt="Gambar"/>
                <div class="image-text position-absolute">
                <h4>Perpustakaan Kota</h4>
                </div>
            </a>
            </div>
            </div>
        
        </div>
    </section>
  )
}

export default Destinasi