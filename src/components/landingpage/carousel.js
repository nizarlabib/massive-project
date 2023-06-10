import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../styles/styles.css'; 
import CAROUSEL1 from '../../assets/landingpage/carousel1.svg'
import CAROUSEL2 from '../../assets/landingpage/carousel2.svg'
import CAROUSEL3 from '../../assets/landingpage/carousel3.svg'

const Carousel = () => {
    return (
    <section>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active custom-carousel-height">
            <img src={CAROUSEL1} alt="Image 1"/>
            <div class="carousel-caption caption1">
            <h1 class="font-weight-bold text-white font-weight-bold">Gaya Baru Berwisata di Lampung</h1>
            <p>"Lampung TOURISM APP" Trobosan Inovatif buat panduan kamu  menikmati indahnya destinasi pariwisata Lampung, dengan fasilitas booking langsung dalam aplikasi</p>
            <button type="button" class="btn btn-primary text-white mt-4">Download Sekarang</button>
            </div>
        </div>
        <div class="carousel-item custom-carousel-height">
            <img src={CAROUSEL2} alt="Image 2"/>
            <div class="carousel-caption text-center caption2">
            <h1>Lampung Festival</h1>
            <p>Nikmati beragam atraksi dan budaya yang sangat menarik di kabupaten Lampung, The Pioneer of Attractions</p>
            <button type="button" class="btn btn-primary text-white mt-4">Explore Sekarang</button>
            </div>
        </div>
        <div class="carousel-item custom-carousel-height">
            <img src={CAROUSEL3} alt="Image 3"/>
            <div class="carousel-caption caption3">
            <h1>Tegal Mas Lampung</h1>
            <p>Salah satu destinasi populer yang ada di Lampung. Dengan view Pantai dan laut yang dapat memanjakan mata memandang  Membuat wisatawan merasa tenang dan nyaman berada di Lampung</p>
            <button type="button" class="btn btn-primary text-white mt-4">Explore Sekarang</button>
            </div>
        </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
    </div>
  </section>
  )
}

export default Carousel